const { User, Project } = require("../models");

const { pagination } = require("./utility.service");
const { userGenericSelect,
    projectGenericSelect } = require("./service.constants")
const searchService = async ({
    searchString,
    page,
    size,
    budgetMin = null,
    budgetMax = null,
    skills = [],
    location = [],
    isRemote = false,
}) => {
    const { limit, skip } = pagination({ page, size })

    const stringQuery = searchString.length >= 3 && { "$text": { "$search": searchString } }
    const stringScore = searchString.length >= 3 && { "score": { "$meta": "textScore" } }

    const budgetQuery = (budgetMin !== null && budgetMax !== null) && {
        "$and": [
            { "budget.minPrice": { "$gte": budgetMin } },
            { "budget.minPrice": { "$lte": budgetMax } }
        ]
    }
    const workLocationQuery = (location.length >= 1) && {
        "workLocation": { "$in": location }
    }
    const isRemoteQuery = isRemote && {
        "workLocation": "remote"
    }

    const userSkillsQuery = (skills.length >= 1) && {
        "skills.name": { "$in": skills }
    }
    const projectSkillsQuery = (skills.length >= 1) && {
        "skills": { "$in": skills }
    }

    const users = await User.find(
        {
            ...stringQuery,
            ...userSkillsQuery
        },
        {
            ...stringScore
        },
        { limit, skip })
        .sort({ "createdAt": -1, ...stringScore })
        .select(userGenericSelect)

    const projects = await Project.find(
        {
            ...stringQuery,
            ...budgetQuery,
            ...projectSkillsQuery,
            ...workLocationQuery,
            ...isRemoteQuery
        },
        {
            ...stringScore
        },
        { limit, skip })
        .sort({ "createdAt": -1, ...stringScore })
        .select(projectGenericSelect)

    const userCount = await User.find(
        {
            ...stringQuery,
            ...userSkillsQuery
        }, {
    }).count()


    const projectCount = await Project.find(
        {
            ...stringQuery,
            ...budgetQuery,
            ...projectSkillsQuery,
            ...workLocationQuery,
            ...isRemoteQuery
        }, {
    }).count()


    const totalUserPages = Math.ceil(userCount / size);
    const totalProjectPages = Math.ceil(projectCount / size)

    if (users.length >= 1 || projects.length >= 1) {
        return ({
            message: "search done",
            status: 200,
            users,
            projects,
            page,
            totalUserPages,
            totalProjectPages
        })
    }
    else {
        return ({
            message: "Bad Request",
            status: 400
        })
    }
}

module.exports = {
    searchService
}
