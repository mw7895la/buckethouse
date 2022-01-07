import {action, computed, makeObservable, observable} from "mobx";
import Review from "../models/Review";
import AppStore from "./AppStore";
import IReview from "../types/Review";

export default class ReviewStore {
    byId = observable.map<string, Review>();

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load(reviews: IReview[]) {
        reviews.forEach((it) => this.byId.set(it.id, new Review(this.store, it)));
    }

    @computed get all() {
        return Array.from(this.byId.values());
    }
}