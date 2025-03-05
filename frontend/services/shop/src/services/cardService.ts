import {AxiosResponse} from "axios";
import $api from "@/api";
import {CardResponse} from "@packages/shared/src/models/response/cardResponse";

export default class CardService {
    static async getCard(): Promise<AxiosResponse<[CardResponse]>> {
        return $api.get(`card`);
    }

    static async addProduct(productId: number): Promise<AxiosResponse> {
        return $api.post(`card`, {productId})
    }

    static async deleteProduct(productId: number): Promise<AxiosResponse> {
        return $api.put(`card`, {productId})
    }
}
