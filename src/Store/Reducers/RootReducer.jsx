import { combineReducers } from "redux";

import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import BrandReducer from "./BrandReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import WishlistReducer from "./WishlistReducer";
import CheckoutReducer from "./CheckoutReducer";
import NewslatterReducer from "./NewslatterReducer";
import ContactReducer from "./ContactReducer";


export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData: BrandReducer,
    ProductStateData: ProductReducer,
    CartStateData: CartReducer,
    WishlistStateData: WishlistReducer,
    CheckoutStateData: CheckoutReducer,
    NewslatterStateData: NewslatterReducer,
    ContactStateData: ContactReducer,
})