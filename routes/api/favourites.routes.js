const express = require('express');
const router = express.Router({ mergeParams : true });

const favouritesControllers = require('../../controllers/favourites.controllers');
const { useTryCatch } = require('../../services/utility.service');

router.post('/setFavUser', useTryCatch(favouritesControllers.setFavUser));
router.post('/unSetFavUser', useTryCatch(favouritesControllers.unSetFavUser));
router.post('/getAllFavUsers', useTryCatch(favouritesControllers.getAllFavUsers));

router.post('/setFavProject', useTryCatch(favouritesControllers.setFavProject));
router.post('/unSetFavProject', useTryCatch(favouritesControllers.unSetFavProject));

module.exports = router;
