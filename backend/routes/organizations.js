"use strict";

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Pet = require("../models/pet");
const Organization = require("../models/organization");

const router = express.Router({ mergeParams: true });

router.get("/organization", async function (req, res, next) {
  const { org_id } = req.query;
  try {
    const organizations = await Organization.getOrganizationById(org_id);
    return res.json({ organizations });
  } catch (err) {
    return next(err);
  }
});

router.get("/organizations", async function (req, res, next) {
  const { limit, page, location } = req.query;
  try {
    const organizations = await Organization.getOrganizations(
      limit,
      page,
      location
    );
    return res.json({ organizations });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;