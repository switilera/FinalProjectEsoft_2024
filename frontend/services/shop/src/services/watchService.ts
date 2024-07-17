import $api from '@/api';
import {AxiosResponse} from 'axios';
import {WatchTypeResponse} from '@packages/shared/src/models/response/watchTypeResponse';
import {WatchBrandsResponse} from '@packages/shared/src/models/response/watchBrandsResponse';
import {WatchResponse} from '@packages/shared/src/models/response/watchResponse';
import {IWatch} from '@packages/shared/src/models/IWatch';

export default class WatchService {
    static async getWatchTypes(): Promise<AxiosResponse<[WatchTypeResponse]>> {
        return $api.get('type');
    }

    static async getWatchBrands(): Promise<AxiosResponse<[WatchBrandsResponse]>> {
        return $api.get('brand');
    }

    static async getProducts(query: ReqProducts): Promise<AxiosResponse<WatchResponse>> {
        return $api.get('device',{params: query})
    }

    static async getProduct(productId: number): Promise<AxiosResponse<IWatch>> {
        return $api.get(`device/${productId}`)
    }
}

interface ReqProducts {
    typeId: number,
    brandId: number,
    limit: number,
    page: number
}
