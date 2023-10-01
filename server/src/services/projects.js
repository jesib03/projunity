const { Projects, Category, Tags } = require("../db");
const { Op } = require("sequelize");

const ProjectServices = {
  allProjects: async function (query) {
    try {
      const { name, category, tag } = query;
      let condition = {};
      name
        ? (condition = {
            ...condition,
            name: {
              name: { [Op.like]: `%${name}%` },
              [Op.or]: [{ name: { [Op.like]: `${name}%` } }],
            },
          })
        : null;
      tag
        ? (condition = {
            ...condition,
            tag: {
              name: { [Op.like]: `%${tag}%` },
              [Op.or]: [{ name: { [Op.like]: `${tag}%` } }],
            },
          })
        : null;
      category
        ? (condition = {
            ...condition,
            category: {
              name: { [Op.like]: `%${category}%` },
              [Op.or]: [{ name: { [Op.like]: `${category}%` } }],
            },
          })
        : null;

      if (Object.keys(condition).length !== 0) {
        const projectsFilter = await Projects.findAll({
          include: [
            {
              model: Category,
              attributes: ["name"],
              where: condition.category,
              through: { attributes: [] },
            },
            {
              model: Tags,
              attributes: ["name"],
              where: condition.tag,
              through: { attributes: [] },
            },
          ],
          where: condition.name,
        });
        return projectsFilter;
      } else {
        const allProject = await Projects.findAll({
          include: [
            {
              model: Category,
              attributes: ["name"],
              through: { attributes: [] },
            },
            {
              model: Tags,
              attributes: ["name"],
              through: { attributes: [] },
            },
          ],
        });
        return allProject;
      }
    } catch (error) {
      return error;
    }
  },
  projectId: async function (id) {
    try {
      const ProjectId = await Projects.findOne({
        where: { id: id },
        include: [
          {
            model: Category,
            attributes: ["name"],
            through: { attributes: [] },
          },
          {
            model: Tags,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      if (ProjectId) {
        return ProjectId;
      } else {
        throw Error(`Id ${id} no encontrado`);
      }
    } catch (error) {
      return error;
    }
  },
  createProjects: async function (projectData) {
    try {
      const {
        name,
        description,
        price,
        visibility,
        shortDescription,
        image,
        commentsAllowed,
        views,
        status,
      } = projectData;
      if (
        !name ||
        !description ||
        !price ||
        !visibility ||
        !shortDescription ||
        !image ||
        !commentsAllowed ||
        !views ||
        !status
      ) {
        throw Error("Missing some Data");
      } else {
        const [newProject, created] = await Projects.findOrCreate({
          where: { name: name },
          defaults: { ...projectData },
        });
        if (created) {
          return newProject;
        } else {
          throw Error(`el proyecto ${name} ya existe`);
        }
      }
    } catch (error) {
      return error;
    }
  },
  updateProject: async function (projectData) {
    try {
      const {
        id,
        name,
        title,
        description,
        price,
        visibility,
        shortDescription,
        image,
        commentsAllowed,
        views,
        status,
      } = projectData;
      const updated = await Projects.update(projectData, { where: { id: id } });
      if (updated) {
        const response = await Projects.findByPk(id);
        return response;
      }
    } catch (error) {
      return error;
    }
  },
};

module.exports = ProjectServices;
