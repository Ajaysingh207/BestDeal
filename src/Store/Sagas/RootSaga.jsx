import { all } from "redux-saga/effects"

import maincategorySaga from "./MaincategorySagas"
import subcategorySaga from "./SubcategorySagas"
import brandSaga from "./BrandSagas"
import productSaga from "./ProductSagas"
import cartSaga from "./CartSagas"
import wishlistSaga from "./WishlistSagas"
import checkoutSaga from "./CheckoutSagas"
import newslatterSaga from "./NewslatterSagas"
import contactSaga from "./ContactSagas"

export default function* RootSaga() {
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        brandSaga(),
        productSaga(),
        cartSaga(),
        wishlistSaga(),
        checkoutSaga(),
        newslatterSaga(),
        contactSaga()
    ])
}