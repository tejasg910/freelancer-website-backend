const { User, Project } = require("../models");

const { pagination, queryConditions } = require("../services/utility.service")

const setAndUnSetFavUserService = async ({ 
    action, 
    userId,
    favouriteUserId 
}) => {
    const switchObj = {
        "set": {
            op: "$addToSet",
            message: "Favourite User Added",
        },
        "unset": {
            op: "$pull",
            message: "Favourite User Removed",
        }
    }

    const userUpdate = await User.findByIdAndUpdate(
        userId, {
        [switchObj[action].op]: {
            favUsers: favouriteUserId
        }
    }, {
        runValidators: true,
        new: true
    }
    )

    const favUserUpdate = await User.findByIdAndUpdate(
        favouriteUserId, {
        [switchObj[action].op]: {
            favByUsers: userId
        }
    }, {
        runValidators: true,
        new: true
    }
    )

    return ({
        status: 200,
        message: switchObj[action].message,
        userId: userUpdate._id,
        favUsers: userUpdate.favUsers
    })
}

const getAllFavUsersService = async ({
    page, size, userId
}) => {
    const { limit, skip } = pagination({page, size})

    const users = await User.findById(
        userId, 
        {_id: 1, favUsers: 1}, 
        { limit, skip }
        ).populate({
            path: "favUsers", 
            model: "user",
            select:{
                email: 1, 
                _id: 1, 
                userType:1, 
                favProjects: 1
            }
        })

    if(users.length >= 1) {
        return ({
            message: "All Favourite Users",
            users,
            status: 200
        })
    } else {
        return ({
            message: "Bad Request",
            status: 400
        })

    }

}

const setAndUnSetFavProjectService = async ({
    favProjectId, 
    userId,
    action,
}) => {
    const switchObj = {
        "set": {
            op: "$addToSet",
            message: "Favourite Project Added",
        },
        "unset": {
            op: "$pull",
            message: "Favourite Project Removed",
        }
    }

    const projectUpdate = await Project.findByIdAndUpdate(
        favProjectId, {
            [switchObj[action].op]: {
                favByUsers: userId   
            }
        }, {
            runValidators: true,
            new : true
        }
    )

    const userUpdate = await User.findByIdAndUpdate(userId,{
        [switchObj[action].op]: {
            favProjects: projectUpdate?._id   
        }
    }, {
        runValidators: true,
        new : true
    })

    return ({
        status: 200,
        message: switchObj[action].message,
        projectId: projectUpdate?._id,
        favByUsers: projectUpdate?.favByUsers,
        userId,
    })


}


module.exports = {
    setAndUnSetFavUserService,
    setAndUnSetFavProjectService,
    getAllFavUsersService
}