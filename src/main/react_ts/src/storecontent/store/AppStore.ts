import UserStore from "./UserStore";
import StoreContentStore from "./StoreContentStore";
import ReviewStore from "./ReviewStore";

export default class AppStore{
    user = new UserStore(this);
    storeContent = new StoreContentStore(this);
    review = new ReviewStore(this);
}