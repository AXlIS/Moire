import {createStore} from 'vuex'
import {IState} from "@/store/types";
import {productBasket} from "@/store/productBasket";

export default createStore<IState>({
  state: {
    userAccessKey: null,
  },
  mutations: {
    updateUserAccessKey(state, userAccessKey: string): void {
      state.userAccessKey = userAccessKey
    },
  },
  actions: {

  },
  modules: {
    productBasket
  }
})
