const { User, Project } = require("../models");
const { setAndUnSetFavUserService, getAllFavUsersService, setAndUnSetFavProjectService } = require("../services/favourite.service");

const { pagination } = require("../services/utility.service")

const setFavUser = async (req, res) => {
    const {
        favouriteUserId, 
        userId
    } = req.body

    const response = await setAndUnSetFavUserService({
        favouriteUserId, 
        userId,
        action: "set",
    })

    res.status(response.status).json({
        ...response
    })
}

const unSetFavUser = async (req, res) => {
    const {
        favouriteUserId, 
        userId
    } = req.body

    const response = await setAndUnSetFavUserService({
        favouriteUserId, 
        userId,
        action: "unset",
    })

    res.status(response.status).json({
        ...response
    })
}

const getAllFavUsers = async (req, res) => {
    const { page = 1, size = 10 } = req.query;

    const { userId } = req.body
    const response = getAllFavUsersService({page, size, userId})
    res.status(response.status).json({
        ...response
    })

}

const setFavProject = async (req, res) => {
    const {
        favProjectId, 
        userId
    } = req.body;

    const response = await setAndUnSetFavProjectService({
        favProjectId, 
        userId,
        action: "set",
    })

    res.status(response.status).json({
        ...response
    })

}

const unSetFavProject = async (req, res) => {
    const {
        favProjectId, 
        userId,
    } = req.body;

    const response = await setAndUnSetFavProjectService({
        favProjectId, 
        userId,
        action: "unset",
    })

    res.status(response.status).json({
        ...response
    })
}

module.exports = {
    setFavUser,
    unSetFavUser, 
    getAllFavUsers,
    setFavProject,
    unSetFavProject,
}