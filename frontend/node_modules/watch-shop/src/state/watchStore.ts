import {makeAutoObservable, reaction} from 'mobx';
import WatchService from '@/services/watchService';
import {WatchTypeResponse} from '@packages/shared/src/models/response/watchTypeResponse';
import {WatchBrandsResponse} from '@packages/shared/src/models/response/watchBrandsResponse';
import {IWatch} from '@packages/shared/src/models/IWatch';

const DEFAULT_LIMIT = 10;

class WatchStore {
    error: string = null;

    watchType: WatchTypeResponse[] = [];

    watchBrands: WatchBrandsResponse[] = [];

    watch: IWatch[] = []

    watchCount: number = 0;

    device: IWatch = null;

    filterBrand: number = null;

    filterType: number = null;

    limit: number = DEFAULT_LIMIT;

    offset: number = 1;

    constructor() {
        makeAutoObservable(this)

        reaction(() => this.dependencyReload, () => this.getWatch())
    }

    get dependencyReload() {
        return [
            this.filterBrand,
            this.filterType,
            this.limit,
            this.offset
        ]
    }

    clearFilters = () => {
        this.filterType = null;
        this.filterBrand = null;
        this.limit = DEFAULT_LIMIT;
        this.offset = 1;
    }

    setOffset = (offset: number) => {
        this.offset = offset
    }

    setFilterBrand = (brand: number) => {
        this.filterBrand = brand;
    }

    setFilterType = (type: number) => {
        this.filterType = type;
    }

    setFilter = (filterName: string, value: string[], checked?: boolean) => {
        // @ts-ignore
        this.filters = new Map([...this.filters, [filterName, value]])
    }

    getBrandById = (brandId: number) => {
        return this.watchBrands.find(({id}) => id === brandId)?.name
    }

    setWatch = (watch: IWatch[]) => {
        this.watch = watch;
    }

    setWatchCount = (count: number) => {
        this.watchCount = count;
    }

    setWatchType = (watchType: [WatchTypeResponse]) => {
        this.watchType = watchType;
    }

    setError = (error: string) => {
        this.error = error;
    }

    setWatchBrands = (watchBrands: [WatchBrandsResponse]) => {
        this.watchBrands = watchBrands;
    }

    setSingleDevice = (watch: IWatch) => {
        this.device = watch;
    }


    getWatchTypes = async() => {
        try {
            const {data} = await WatchService.getWatchTypes();

            this.setWatchType(data)
        } catch (error) {
            this.setError(error?.response?.data?.message)
        }
    }

    getWatchBrands = async() => {
        try {
            const {data} = await WatchService.getWatchBrands();

            this.setWatchBrands(data)
        } catch (error) {
            this.setError(error?.response?.data?.message)
        }
    }

    getWatch = async() => {
        try {
            const {data} = await WatchService.getProducts({
                limit: this.limit,
                page: this.offset,
                brandId: this.filterBrand,
                typeId: this.filterType
            });

            this.setWatch(data.rows);
            this.setWatchCount(data.count)
        } catch (error) {
            this.setError(error?.response?.data?.message)
        }
    }

    getSingleWatch = async (productId: number) => {
        try {
            const {data} = await WatchService.getProduct(productId);

            this.setSingleDevice(data)
        } catch (error) {
            this.setError(error?.response?.data?.message)
        }
    }
}

export default new WatchStore();
