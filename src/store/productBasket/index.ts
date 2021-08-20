import {Module} from "vuex";
import {IState} from "@/store/types";
import {IProductBasket} from "@/store/productBasket/types";
import {mutations} from "@/store/productBasket/mutations";
import {actions} from "@/store/productBasket/actions";

const state: IProductBasket = {
  productBasket: []
}

export const productBasket: Module<IProductBasket, IState> = {
  state,
  mutations,
  actions
}
