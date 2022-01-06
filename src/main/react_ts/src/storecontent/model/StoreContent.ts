import AppStore from "../store/AppStore";
import IStoreContent from "../types/StoreContent";
import {computed, makeObservable} from "mobx";

export default class StoreContent implements IStoreContent{
    id: string;
    vendorId: string;
    title: string;
    price: number;
    deliveryFee: number;
    description: string;
    stock: number;

    constructor(private store: AppStore, storeContent: IStoreContent) {
        this.id = storeContent.id;
        this.vendorId = storeContent.vendorId;
        this.title = storeContent.title;
        this.price = storeContent.price;
        this.deliveryFee = storeContent.deliveryFee;
        this.description = storeContent.description;
        this.stock = storeContent.stock;

        makeObservable(this);
    }

    @computed get user() {
        return this.store.user.all.find((it) => it.id === this.vendorId);
    }

    @computed get reviews() {
        return this.store.review.all.filter((it) => it.productId === this.id)
    }
}