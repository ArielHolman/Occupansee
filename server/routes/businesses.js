const express = require("express");
const businessController = require("../controllers/businesses");
const router = express.Router();

router.get("/businesses", businessController.getAllBusinesses);

router.get("/:businessId", businessController.getBusinessById);

router.post("/createBusiness", businessController.createBusiness);

router.put("/:businessId", businessController.updateBusinessById);

// router.delete("/:businessId", businessController.deleteBusinessById);

module.exports = router;
