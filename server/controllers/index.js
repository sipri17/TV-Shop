const { comparePassword, hashedPassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { Order, Item, User } = require('../models')

class Controller {

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            if (!user) throw { name: 'data not found', message: 'error invalid email or password' }
            const validPassword = comparePassword(password, user.password)
            if (!validPassword) throw { name: 'data not found', message: 'error invalid email or password' }

            const payload = {
                id: user.id
            }

            const access_token = generateToken(payload)

            res.status(200).json({
                access_token
            })
        } catch (error) {
            next(error)
        }
    }



    static async findAllOrders(req, res, next) {
        try {
            const orders = await Order.findAll({
                include: [{
                    model: User,
                    attributes: { exclude: ['password'] }
                },
                    Item],
                where: {
                    UserId: req.user.id 
                }
            })

            const result = orders.map(data => {
                return {
                    nama: data.dataValues.User.nama,
                    item_name: data.dataValues.Item?.dataValues.item_name
                }
            })

            console.log("orders:", orders[0].dataValues.Item.dataValues);


            res.status(201).json(orders)
        } catch (error) {
            next(error)
        }
    }

    static async findOrder(req, res, next) {
        try {
            const { id } = req.params
            let order = await Order.findByPk(id)
            if (!order) throw { name: "404data not found", message: "Order is not found" }

            res.status(201).json(order)
        } catch (error) {
            next(error)
        }
    }

    static async createOrder(req, res, next) {
        try {
            const { ItemId, quantity } = req.body
            if (!ItemId || !quantity) throw { name: "required", message: "ItemId and quantity is required" }
            if (isNaN(ItemId) || isNaN(quantity)) throw { name: "required", message: "ItemId and quantity have to be numbers" }
            const item = await Item.findByPk(ItemId)
            if (!item) throw { name: "404data not found", message: "Item is not found" }
            const orders = await Order.create({ ItemId, quantity, UserId: req.user.id })


            res.status(201).json(orders)
        } catch (error) {
            next(error)
        }
    }






}


module.exports = Controller