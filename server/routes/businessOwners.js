const express = require("express");
const businessOwnersControllers = require("../controllers/businessOwners");
const router = express.Router();

router.get("/owners", businessOwnersControllers.getAllBusinessOwners);

router.post("/signIn", businessOwnersControllers.getSignIn);

// router.get("/:businessOwner_id", businessOwnersControllers.getBusinessOwnerById);

router.post("/createOwner", businessOwnersControllers.createBusinessOwner);

// router.put("/:businessOwner_id", businessOwnersControllers.updateBusinessOwnerById);

// leaving for future updates
// router.delete("/:businessOwner_id", businessOwnersControllers.deleteBusinessOwnerById);

module.exports = router;
