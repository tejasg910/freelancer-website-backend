const express = require('express');
const router = express.Router({ mergeParams : true });

const searchController = require('../../controllers/search.controllers')
const { useTryCatch } = require('../../services/utility.service');

router.post('/', useTryCatch(searchController.search));

module.exports = router;
