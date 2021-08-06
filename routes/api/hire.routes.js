const express = require('express');
const router = express.Router({ mergeParams : true });


const hireControllers = require('../../controllers/hire.controllers');
const { useTryCatch } = require('../../services/utility.service');

router.post('/applyProject', useTryCatch(hireControllers.applyProject));
router.post('/getAllAppliedProjects', useTryCatch(hireControllers.getAllAppliedProjects));

router.post('/hireApplicant', useTryCatch(hireControllers.hireApplicant));
router.post('/rejectApplicant', useTryCatch(hireControllers.rejectApplicant));

router.post('/hireRequest', useTryCatch(hireControllers.hireRequest));
router.post('/getAllHireRequests', useTryCatch(hireControllers.getAllHireRequests));

router.post('/agreeHireRequest', useTryCatch(hireControllers.agreeHireRequest));
router.post('/rejectHireRequest', useTryCatch(hireControllers.rejectHireRequest));

module.exports = router;