const express = require("express");
const businessOwnersControllers = require("../controllers/businessOwners");
const router = express.Router();

router.get("/owners", businessOwnersControllers.getAllBusinessOwners);

// router.get("/:businessOwner_id", businessOwnersControllers.getBusinessOwnerById);

router.post("/createOwner", businessOwnersControllers.createBusinessOwner);

// router.put("/:businessOwner_id", businessOwnersControllers.updateBusinessOwnerById);

// router.delete("/:businessOwner_id", businessOwnersControllers.deleteBusinessOwnerById);

module.exports = router;
