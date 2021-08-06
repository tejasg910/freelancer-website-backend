const userSelect = {
    email: 1, 
    userName: 1,
    fullName: 1,
    firstName: 1,
    lastName: 1,
    userType: 1
}

const applicationSelect = {
    projectId: 1,
    userId: 1,
    description: 1,
    bid: 1,
    applicationStatus: 1,
}

const projectSelect = {
    projectTitle: 1,
    description: 1,
    skills: 1,
    education: 1,
    workLocation: 1,
    softwareRequirements: 1,
    freelancersCount: 1,
    duration: 1,
    visibility: 1,
    budget: 1,
    postedBy: 1
}

// generic search select constants
const userGenericSelect = {
    fullName: 1,
    firstName: 1,
    lastName: 1,
    email: 1,
    userName: 1,
    userType: 1,
    occupation: 1,
    intro: 1,
    profilePic: 1,
    qualifications: 1,
    skills: 1,
    reviews: 1,
}

const projectGenericSelect = {
    projectTitle: 1,
    description: 1,
    skills: 1,
    education: 1,
    workLocation: 1,
    softwareRequirements: 1,
    freelancersCount: 1,
    duration: 1,
    visibility: 1,
    budget: 1,
    postedBy: 1,
    appliedBy: 1,
    favByUsers: 1,
    hireRequests: 1,
    hired: 1,
}

// end

module.exports = {
    userSelect,
    applicationSelect,
    projectSelect
}