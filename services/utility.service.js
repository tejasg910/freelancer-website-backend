const { HireRequest } = require("../models");

const pagination = ({page, size}) => {
    const limit = parseInt(size)
    const skip = (page - 1) * size;

    return ({limit, skip})
}

const queryConditions = (bodyObj, keys = []) => {
    const conditions = {};

    for(let key of ["_id", ...keys]) {
        if(bodyObj[key])
            conditions[key] = bodyObj[key]
    }
    
    return conditions;
}


const useTryCatch = fn => (req, res, next) => 
    Promise.resolve(fn(req, res, next)).catch((err) =>next(err))

module.exports = {
    pagination,
    queryConditions,
    useTryCatch
}