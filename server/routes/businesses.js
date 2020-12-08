const express = require("express");
const businessController = require("../controllers/businesses");
const router = express.Router();

router.get("/businesses", businessController.getAllBusinesses);

// router.get("/:business_id", businessController.getBusinessById);

router.post("/createBusiness", businessController.createBusiness);

// router.put("/:business_id", businessController.updateBusinessById);

// router.delete("/:business_id", businessController.deleteBusinessById);

module.exports = router;
