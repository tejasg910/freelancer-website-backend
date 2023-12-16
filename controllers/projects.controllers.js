const { Project } = require("../models");
const {
  createProjectService,
  getAllProjectsService,
  getValidProjectsForHireService,
} = require("../services/projects.service");
const { queryConditions } = require("../services/utility.service");

const getAllProjects = async (req, res) => {
  const { page = 1, size = 10 } = req.query;

  const conditions = queryConditions(req.body, Object.keys(Project.schema.obj));

  const response = await getAllProjectsService({ page, size, conditions });

  res.status(response.status).json({
    ...response,
  });
};

const createProject = async (req, res) => {
  const {
    projectTitle,
    description,
    skills,
    education,
    workLocation,
    softwareRequirements,
    freelancersCount,
    visibility,
    postedBy,
    budget,
    duration,
  } = req.body;

  const response = await createProjectService({
    projectTitle,
    description,
    skills,
    education,
    workLocation,
    softwareRequirements,
    freelancersCount,
    visibility,
    postedBy,
    budget,
    duration,
  });

  res.status(response.status).json({
    ...response,
  });
};

const getValidProjectsForHire = async (req, res) => {
  const { projectId, freelancerId, clientId } = req.query;

  const response = await getValidProjectsForHireService({
    projectId,
    freelancerId,
    clientId,
  });

  res.status(response.status).json({
    ...response,
  });
};

module.exports = {
  getAllProjects,
  createProject,
  getValidProjectsForHire,
};
