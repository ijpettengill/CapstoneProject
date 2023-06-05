"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { api_request } = require("../helpers/Api_Helper");

class Organization {
  static async getOrganizationById(org_id) {
    try {
      const resp = await api_request(`organizations/${org_id}`);
      return resp.organization;
    } catch (error) {
      console.log(error);
    }
  }

  // ########################################################################
  // Get organization list from the API,
  // Params:
  //      limit: is the limit of organization that the request is going to bring back default 20
  //      page: is the page that is going to request starting 1, then 2,3,4...
  //            this is done that way we can load more organization and not do a big 100 organization request
  //            we call 20 organization at the time from the API
  //      location (can be optional): location is the location that the user enter to show pet that are close to
  //                his/her zip code
  //      Sort (can be optional): we sort the request per distance using location
  //
  static async getOrganizations(limit, page, location) {
    try {
      if (location) {
        const resp = await api_request(`organizations`, {
          page: page,
          limit: limit,
          sort: "distance",
          location: location,
        });
        return resp.organizations;
      } else {
        const resp = await api_request(`organizations`, {
          page: page,
          limit: limit,
        });
        return resp.organizations;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Organization;