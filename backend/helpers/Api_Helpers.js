"use strict";

const db = require("../db");
const axios = require("axios");
const { NotFoundError } = require("../expressError");
const BASE_URL = "https://api.petfinder.com/v2/";

class Api_Helper {
  static async api_request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const token_data = await db.query(
      "SELECT api_key, secret_key, api_token from config"
    );
    let { api_token } = token_data.rows[0];

    const url = `${BASE_URL}${endpoint}`;
    const headers = { Authorization: `Bearer ${api_token}` };
    const params = method === "get" ? data : {};

    try {
      // Check for If Request is Made to the API before
      // if true we use the local DB response if is not more old than 3 hours
      if (method === "get") {
        const resp = await Api_Helper.checkForRequest(
          url,
          data,
          method,
          headers,
          params
        );
        return resp;
      }

      if (method === "post") {
        return (await axios({ url, method, params, data, headers })).data;
      } else {
        return (await axios({ url, method, params, headers })).data;
      }
    } catch (err) {
      console.error("API Error:", err.response);
      if (err.response.status === 403) {
        await Api_Helper.updateApiToken();
      }
      if (err.response.status === 401) {
        await Api_Helper.updateApiToken();
      }
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Get token for the API from LOCAL DB
  static async getApiToken() {
    const result = await db.query(
      "SELECT api_key, secret_key, api_token from config"
    );

    let { api_token } = result.rows[0];

    return api_token;
  }

  // Getting current information,{ api_key, secret_key } from DataBase
  // To be use to get a new Api token
  // Update the token in local DB to be use for all request
  static async updateApiToken() {
    const configData = await db.query(
      "SELECT api_key, secret_key, api_token from config"
    );

    const { api_key, secret_key } = configData.rows[0];
    const api_token_call_data = {
      grant_type: "client_credentials",
      client_id: api_key,
      client_secret: secret_key,
    };

    // Getting a new token from API and Updating the Token in DataBase
    try {
      const data = await Api_Helper.api_request(
        "oauth2/token",
        api_token_call_data,
        "post"
      );

      const result = await db.query(
        `UPDATE config set api_token = '${data.access_token}' RETURNING api_token`
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async checkForRequest(url, data, method, headers, params) {
    const request = await db.query(
      `SELECT request_url, request_response, request_time 
       FROM CACHE
       WHERE request_url = $1 and request_time > now() - '3 hours'::interval`,
      [url + JSON.stringify(data) + method]
    );

    if (request.rows.length === 0) {
      const resp = (await axios({ url, method, params, headers })).data;
      await Api_Helper.createCache(url + JSON.stringify(params) + method, resp);
      return resp;
    } else {
      return JSON.parse(request.rows[0].request_response);
    }
  }

  static async createCache(url, response = "", time = new Date()) {
    const resp = await db.query(
      `INSERT INTO CACHE (request_url, request_response, request_time)
       VALUES ($1, $2, $3) 
       ON CONFLICT (request_url)
       DO 
       UPDATE SET request_response = $2, request_time = $3
       RETURNING request_url, request_response, request_time`,
      [url, JSON.stringify(response), time]
    );
  }

  static getTime() {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    return dateTime;
  }
}

module.exports = Api_Helper;