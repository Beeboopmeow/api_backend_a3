const Controller = (Model) => {
  return {
    getAll: async (req, res, next) => {
      try {
        const registryList = await Model.findAll();
        return res.status(200).json(registryList);
      } catch (e) {
        next(e);
      }
    },

    getOneById: async (req, res, next) => {
      try {
        const registry = await Model.findByPk(req.params.id);
        return res.status(200).json(registry);
      } catch (e) {
        next(e);
      }
    },

    create: async (req, res, next) => {
      try {
        const newRegistry = await Model.create(req.body);
        return res.status(200).json(newRegistry);
      } catch (e) {
        next(e);
      }
    },

    update: async (req, res, next) => {
      try {
        const registry = await Model.findByPk(req.params.id);
        const updatedRegistry = await registry.update(req.body);
        return res
          .status(200)
          .json({ message: "Registry successfully updated", updatedRegistry });
      } catch (e) {
        next(e);
      }
    },

    erase: async (req, res, next) => {
      try {
        const registry = await Model.findByPk(req.params.id);
        registry.destroy();
        return res
          .status(200)
          .json({ message: "Registry successfully deleted" });
      } catch (e) {
        next(e);
      }
    },
  };
};

module.exports = Controller;
