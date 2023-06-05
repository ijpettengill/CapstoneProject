"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { api_request } = require("../helpers/Api_Helper");

class Pet {
  // ########################################################################
  // getRandomPet get a random pet from the API
  //
  // Params:
  //      limit: is the limit of pet that the request is going to bring back default 1
  //      animals: is the type of animal that the request is going to bring back
  //               default is a random animal from ["dog", "cat", "bird"].
  //
  static async getRandomPet(
    limit = 1,
    animals = ["dog", "cat", "bird"].sort(() => 0.5 - Math.random())[0]
  ) {
    try {
      const reps = await api_request("animals", {
        type: animals === "NoType" ? "" : animals,
        page: Math.floor(Math.random() * 20 + 1),
        sort: "random",
        limit: limit,
      });

      return reps.animals;
    } catch (error) {
      console.log(error);
    }
  }

  // ########################################################################
  // getPetById: Request to the API to get a Pet By Id
  //
  // Params:
  //        pet_id: pet id to request that pet
  //
  static async getPetById(pet_id) {
    try {
      const reps = await api_request(`animals/${pet_id}`);
      return reps.animal;
    } catch (error) {
      console.log(error);
    }
  }

  // ########################################################################
  // getIsFavorite: Get the favorite pet from local DB
  // Params:
  //        pet_id: pet id to request favorite pet for the user
  //        user_id: user id to request favorite pet for the user
  //
  static async getIsFavorite(user_id, pet_id) {
    const favPets = await db.query(
      `SELECT user_id, pet_id
             FROM favorite
             WHERE user_id = $1 and pet_id = $2`,
      [user_id, pet_id]
    );

    const fav = favPets.rows[0];

    return fav;
  }
  // ########################################################################
  // setIsFavorite: Add Favorite pet to local DB
  // Params:
  //        pet_id: pet id to request to set favorite pet for the user
  //        user_id: user id to request to set favorite pet for the user
  //        pet: is the pet info that is going to be save into the local db
  //
  static async setIsFavorite(user_id, pet_id, pet) {
    const favPets = await db.query(
      `INSERT INTO favorite (user_id, pet_id, pet_info)
         VALUES ($1, $2, $3) 
         RETURNING user_id, pet_id, pet_info`,
      [user_id, pet_id, JSON.stringify(pet)]
    );

    const fav = favPets.rows[0];

    return fav;
  }

  // ########################################################################
  // removeFavorite: Remove Favorite pet to local DB
  // Params:
  //        pet_id: pet id to request to remove favorite pet for the user
  //        user_id: user id to request to remove favorite pet for the user
  //
  static async removeFavorite(user_id, pet_id) {
    const result = await db.query(
      `DELETE
         FROM favorite
         WHERE user_id = $1 and pet_id = $2
         RETURNING user_id, pet_id`,
      [user_id, pet_id]
    );
    const resp = result.rows[0];

    if (!resp) throw new NotFoundError(`No Fav Pet Found: ${pet_id}`);
  }

  // ########################################################################
  // GetAllFavoritePet: Get the all favorite pets from local DB
  // Params:
  //        user_id: user id to request favorite pet for the user
  //
  static async GetAllFavoritePet(user_id) {
    const favPets = await db.query(
      `SELECT user_id, pet_id, pet_info
             FROM favorite
             WHERE user_id = $1`,
      [user_id]
    );

    const fav = favPets.rows;

    return fav;
  }

  // ########################################################################
  // GetAllRecentPetView: Get the all recent pets view from local DB
  // Params:
  //        user_id: user id to request recent viewed pets for the user
  //
  static async GetAllRecentPetView(user_id) {
    const recPets = await db.query(
      `SELECT user_id, pet_id, pet_info
               FROM recently_view_pet
               WHERE user_id = $1`,
      [user_id]
    );

    const rec = recPets.rows;

    return rec;
  }

  // ########################################################################
  // addRecentPetView: Add recent pet view to local DB
  // Params:
  //        pet_id: pet id to request to set favorite pet for the user
  //        user_id: user id to request to set favorite pet for the user
  //        pet: is the pet info that is going to be save into the local db
  // In case of conflit the the pet will be updated instead
  //
  static async addRecentPetView(user_id, pet_id, pet) {
    const limitPetStore = await Pet.GetAllRecentPetView(user_id);

    // This is a limitation to the user that can only store 5 recent pets viewed
    if (limitPetStore.length > 5) {
      const result = await db.query(
        `DELETE
           FROM recently_view_pet
           WHERE user_id = $1`,
        [user_id]
      );
    }

    const recPets = await db.query(
      `INSERT INTO recently_view_pet (user_id, pet_id, pet_info)
           VALUES ($1, $2, $3) 
           ON CONFLICT (user_id, pet_id)
           DO
           UPDATE SET pet_info = $3
           RETURNING user_id, pet_id, pet_info`,
      [user_id, pet_id, JSON.stringify(pet)]
    );

    const rec = recPets.rows[0];

    return rec;
  }

  // ########################################################################
  // addCommentForPet: Add comment for pet view to local DB
  // Params:
  //        data: .
  //              pet_id: pet id to request to set favorite pet for the user
  //              user_id: user id to request to set favorite pet for the user
  //              pet_info: is the pet info that is going to be save into the local db
  //              msg_title: is the title for the msg
  //              msg_body: body os the msg
  //        msg_time: is going to be use to get msg using timestamp
  // In case of conflit the the pet will be updated instead
  //
  static async addCommentForPet(data) {
    const commPets = await db.query(
      `INSERT INTO pet_comments (pet_id, user_id, pet_info, msg_title, msg_body, msg_time)
           VALUES ($1, $2, $3, $4, $5, $6) 
           RETURNING pet_id, user_id, pet_info, msg_title, msg_body, msg_time`,
      [
        data.pet_id,
        data.user_id,
        JSON.stringify(data.pet_info),
        data.msg_title,
        data.msg_body,
        new Date(),
      ]
    );

    const comment = commPets.rows[0];

    return comment;
  }

  // ########################################################################
  // getCommentForPet: Request msg store in the local DB
  //
  // Params:
  //        pet_id: pet id to request that pet
  //
  static async getCommentForPet(pet_id) {
    const commPet = await db.query(
      `SELECT user_id, msg_title, msg_body, msg_time, first_name, last_name
               FROM pet_comments as pet
               JOIN users as us 
               ON us.username = pet.user_id
               WHERE pet_id = $1
               ORDER BY msg_time DESC`,
      [pet_id]
    );

    const commet = commPet.rows;

    return commet;
  }

  // ########################################################################
  // getLastComments: Request msg store in the local DB order by date on only getting the last 5 comments
  //
  static async getLastComments() {
    const commPet = await db.query(
      `SELECT user_id, pet_info, msg_title, msg_body, msg_time, first_name, last_name 
              from pet_comments as pet 
              JOIN users as us 
              on us.username = pet.user_id 
              ORDER BY msg_time DESC 
              limit 5`,
      []
    );

    const commet = commPet.rows;

    return commet;
  }

  // ########################################################################
  // Get pet list from the API,
  // Params:
  //      limit: is the limit of pet that the request is going to bring back default 1
  //      animals: is the type of animal that the request is going to bring back
  //               default is a dog, but in this case should never go to default
  //      page: is the page that is going to request starting 1, then 2,3,4...
  //            this is done that way we can load more pet and not do a big 100 pet request
  //            we call 20 pet at the time from the API
  //      location: location is the location that the user enter to show pet that are close to
  //                his/her zip code
  //
  static async getPetGallery(
    limit = 20,
    animals = "dog",
    page,
    location = null
  ) {
    try {
      if (location) {
        const reps = await api_request("animals", {
          type: animals,
          page: page,
          limit: limit,
          sort: "distance",
          location: location,
        });
        return reps.animals;
      } else {
        const reps = await api_request("animals", {
          type: animals,
          page: page,
          limit: limit,
        });
        return reps.animals;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // ########################################################################
  // Get organization list from the API,
  // Params:
  //      limit: is the limit of pet that the request is going to bring back default 1
  //      organization: is the id that is going to be use to pull a organization
  //
  static async galleryForOrg(limit, org_id) {
    try {
      const reps = await api_request(`animals`, {
        limit: limit,
        organization: org_id,
      });

      return reps.animals;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Pet;