import {makeAutoObservable} from "mobx";
import {CardResponse} from '@packages/shared/src/models/response/cardResponse';
import CardService from '@/services/cardService';

class CardStore {
    products: CardResponse[] = [];

    error: string = null;

    totalPrice: number = null;

    constructor() {
        makeAutoObservable(this)
    }

    setProducts = (products: CardResponse[]) => {
        this.products = products
    }

    setTotalPrice = (card: CardResponse[]) => {
        let total: number = 0;

        card.forEach(({count, device}) => {
            total = count * device.price + total;
        })

        this.totalPrice = total;
    }

    setError = (error: string) => {
        this.error = error;
    }

    getProducts = async() => {
        try {
            const {data} = await CardService.getCard();

            this.setProducts(data)
            this.setTotalPrice(data)
        } catch (error) {
            this.setError(error?.message)
        }
    }

    addProduct = async(productId: number) => {
        try {
            await CardService.addProduct(productId);

            await this.getProducts();
        } catch (error) {
            this.setError(error?.message)
        }
    }

    deleteProduct = async(productId: number) => {
        try {
            await CardService.deleteProduct(productId);

            await this.getProducts();
        } catch (error) {
            this.setError(error?.message)
        }
    }
}

export default new CardStore();
