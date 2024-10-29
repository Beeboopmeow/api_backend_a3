const { where } = require("sequelize");

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

  async login(req, res) {
    try {
      const { contact, password } = req.body;

      const customer = await this.Model.findOne({
        where: {
          contact,
          password,
        },
      });

      if (customer) {
        res.status(200).json({ message: 'Login bem-sucedido', customer });
      } else {
        res.status(401).json({ message: 'Contato ou senha incorretos'});
      }
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  }
}

module.exports = Controller;
