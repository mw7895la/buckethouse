import {action, computed, makeAutoObservable, observable} from "mobx";
import AppStore from "./AppStore";
import StoreContent from "../model/StoreContent";
import IStoreContent from "../types/StoreContent";


export default class StoreContentStore {

    byId = observable.map<string, StoreContent>();

    constructor(private store: AppStore) {
        makeAutoObservable(this);
    }

    @action load(storeContents: IStoreContent[]) {
        storeContents.forEach((it) => this.byId.set(it.id, new StoreContent(this.store, it)));
    }

    @computed get all() {
        return Array.from(this.byId.values());
    }

}