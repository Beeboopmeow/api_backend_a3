const Customer = require("../models/customerModel");
const Controller = require("./Controller");

class CustomerController extends Controller {
    constructor(model) {
        super(model);
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

const customerController = new CustomerController(Customer);

module.exports = customerController;
