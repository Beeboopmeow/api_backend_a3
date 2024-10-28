class Controller {
  constructor(Model) {
    this.Model = Model;
  }

  async getAll(req, res, next) {
    try {
      const registryList = await this.Model.findAll();
      return res.status(200).json(registryList);
    } catch (e) {
      next(e);
    }
  }

  async getOneById(req, res, next) {
    try {
      const registry = await this.Model.findByPk(req.params.id);
      return res.status(200).json(registry);
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    try {
      const newRegistry = await this.Model.create(req.body);
      return res.status(200).json(newRegistry);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const registry = await this.Model.findByPk(req.params.id);
      if (!registry) {
        return res.status(404).json({ message: "Record not found" });
      }
      const updatedRegistry = await registry.update(req.body);
      return res.status(200).json(updatedRegistry);
    } catch (e) {
      next(e);
    }
  }

  async erase(req, res, next) {
    try {
      const registry = await this.Model.findByPk(req.params.id);
      if (!registry) {
        return res.status(404).json({ message: "Record not found" });
      }
      await registry.destroy();
      return res.status(200).json({ message: "Record successfully deleted" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = Controller;
