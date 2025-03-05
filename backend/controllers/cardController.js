const { Basket, BasketDevice, Device} = require('../models/models');
const ApiError = require('../error/ApiError');

class CardController {
    static _getBasket(userId) {
        return Basket.findOne({where: {userId}})
    }

    static async getCard({user}, response, next) {
        try {
            const basket = await CardController._getBasket(user.id)

            if (!basket) {
                return next(ApiError.badRequest(`Корзина пользователя: ${user.id} не найдена!`));
            }


            const products = await BasketDevice.findAll({
                where: {basketId: basket.id} , include: ['device']
            })

            if (!products) {
                return response.json([])
            }

            const makeProducts = products.reduce((acc, {deviceId, device}) => {
                const product = acc.find(({productId}) => productId === deviceId);

                if (!product) {
                    acc.push({productId: deviceId, count: 1, device})
                } else {
                    acc[acc.indexOf(product)] = {...product, count: product.count + 1, device}
                }

                return acc;
            }, [])

            return response.json(makeProducts)
        } catch (e) {
            console.log(e)
        }
    }

    static async addProduct({body, user}, response, next) {
        try {
            const {productId} = body;

            const basket = await CardController._getBasket(user.id)

            if (!basket) {
                return next(ApiError.badRequest(`Корзина пользователя: ${user.id} не найдена!`));
            }

            await BasketDevice.create({basketId: basket.id, deviceId: productId})

            return response.status(200).send('Товар добавлен')
        } catch (e) {
            console.log(e)
        }
    }

    static async deleteProduct({body, user}, response, next){
        try {
            const {productId} = body;

            const basket = await CardController._getBasket(user.id)

            if (!basket) {
                return next(ApiError.badRequest(`Корзина пользователя: ${user.id} не найдена!`));
            }

            const products = await BasketDevice.findAll({
                where: {basketId: basket.id, deviceId: productId}
            })

            if (!products.length) {
                return next(ApiError.badRequest(`Товар: ${productId} не найден!`));
            }

            await BasketDevice.destroy({where: {id: products[products.length - 1]?.id}})

            return response.status(200).send('Товар удален')
        } catch (e) {
            console.log(e)
        }
    }

    static async clearProducts({user}, response, next) {
        try {
            const basket = await CardController._getBasket(user.id)

            if (!basket) {
                return next(ApiError.badRequest(`Корзина пользователя: ${user.id} не найдена!`));
            }

            await BasketDevice.destroy({where: {basketId: basket.id}})

            return response.status(200).send('Корзина очищена')

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = {CardController}
