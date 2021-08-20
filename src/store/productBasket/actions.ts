import {ActionTree} from "vuex";
import {IState} from "@/store/types";
import {IProductBasket} from "@/store/productBasket/types";
import axios from "axios";
import {API_URL} from "../../../config";

export const actions: ActionTree<IProductBasket, IState> = {
  loadBasket(context) {
    return axios
        .get(`${API_URL}api/baskets`, {
          params: {
            userAccessKey: context.rootState.userAccessKey
          }
        })
        .then(respons => {
          if (!context.rootState.userAccessKey) {
            localStorage.setItem('userAccessKey', respons.data.user.accessKey)
            context.commit('updateUserAccessKey', respons.data.user.accessKey)
          }
        })

  }
}
