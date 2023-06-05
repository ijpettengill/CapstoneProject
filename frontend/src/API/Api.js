import axios from "axios";
import env from "./env";

const BASE_URL = process.env.REACT_APP_BASE_URL || env.api_url;

class AdoptAPetApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${AdoptAPetApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //######################################################################
  // Pets Section
  //######################################################################

  /** Get pets */

  // Request Random Pet from API
  static async getRandomPet(limit, type) {
    let res = await this.request(`pets/random`, { limit: limit, type: type });
    return res.pets;
  }

  // Requests 20 pets per pages at the time from API using TYpe, Page, and Location
  static async getPets(limit, type, page, location) {
    let res = await this.request(`pets/gallery`, {
      limit: limit,
      type: type,
      page: page,
      location: location,
    });
    return res.pets;
  }

  // Get Pets that are currentlly in a organization
  static async getPetsForOrg(limit, org_id) {
    let res = await this.request(`pets/galleryfororg`, {
      limit: limit,
      org_id: org_id,
    });
    return res.pets;
  }

  // Request a single pet by ID from the API
  static async getPetById(pet_id) {
    let res = await this.request(`pets/pet`, { pet_id: pet_id });
    return res.pets;
  }

  // Request favorite pet from backend DB
  static async getIsFavorite(user_id, pet_id) {
    let res = await this.request(`pets/isfavorite`, {
      user_id: user_id,
      pet_id: pet_id,
    });
    return res.pets;
  }

  // Request to set favorite pet in backend DB
  static async setIsFavorite(user_id, pet_id, pet) {
    let res = await this.request(`pets/setfavorite`, {
      user_id: user_id,
      pet_id: pet_id,
      pet: pet,
    });
    return res.pets;
  }

  // Request to remove favorite pet in backend DB
  static async removeFavorite(user_id, pet_id) {
    let res = await this.request(`pets/removefavorite`, {
      user_id: user_id,
      pet_id: pet_id,
    });
    return res;
  }

  // Request to GET all favorite pet in backend DB
  static async GetAllFavoritePet(user_id) {
    let res = await this.request(`pets/allfavoritepet`, {
      user_id: user_id,
    });
    return res;
  }

  // Request to get all recent pet view in backend DB
  static async GetAllRecentPetView(user_id) {
    let res = await this.request(`pets/allrecentviewpet`, {
      user_id: user_id,
    });
    return res;
  }

  // Request to set recent pet view pet in backend DB
  static async addRecentPetView(user_id, pet_id, pet) {
    let res = await this.request(`pets/addrecentpetview`, {
      user_id: user_id,
      pet_id: pet_id,
      pet: pet,
    });
    return res.pets;
  }

  //######################################################################
  // End Pets Section
  //######################################################################

  //######################################################################
  // Comments Section
  //######################################################################

  // Request to add comment to a pet for a user
  static async addCommentForPet(data) {
    let res = await this.request(`pets/addcommentforpet`, data);
    return res.pets;
  }

  static async getCommentForPet(pet_id) {
    let res = await this.request(`pets/getcommentforpet`, { pet_id: pet_id });
    return res.pets;
  }

  static async getLastComments() {
    let res = await this.request(`pets/getlastcomments`);
    return res.comments;
  }

  //######################################################################
  // End of Comments Section
  //######################################################################

  //######################################################################
  // Organization Section
  //######################################################################

  // Request a single organization by ID from the API
  static async getOrganizationById(org_id) {
    let res = await this.request(`organizations/organization`, {
      org_id: org_id,
    });
    return res.organizations;
  }

  // Requests 20 organizations per pages at the time from API using Limit, Page, and Location
  static async getOrgs(limit, page, location) {
    let res = await this.request(`organizations/organizations`, {
      limit: limit,
      page: page,
      location: location,
    });
    return res.organizations;
  }

  //######################################################################
  // End Organization Section
  //######################################################################

  //######################################################################
  // Companies Section
  //######################################################################

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all the companies */

  static async getCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }

  //######################################################################
  // End Companies Section
  //######################################################################

  //######################################################################
  // Auth/User Section
  //######################################################################

  /** Get token for the user that login */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Post a signup for a new user */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Update user data */

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /** Check for user password in order to update de user profile */

  static async checkUserNamePassword(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Get user data */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  //######################################################################
  // End Auth/User Section
  //######################################################################
}

export default AdoptAPetApi;