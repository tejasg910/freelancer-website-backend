const { searchService } = require("../services/search.service");

const search = async (req, res) => {
    const { page = 1, size = 10 } = req.query;
    const { 
        searchString,
        budgetMin,
        budgetMax,
        skills,
        location,
        isRemote,
     } = req.body;
    const response = await searchService({
        searchString,
        budgetMin,
        budgetMax,
        skills,
        location,
        isRemote,
        page,
        size
    })

    res.status(response.status).json({
        ...response
    })
}

module.exports = {
    search
}
