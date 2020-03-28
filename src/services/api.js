import axios from "axios"

import mocks from "./mocks.json"

const BASE_URL = "https://aerolab-challenge.now.sh"
const SUPER_SECRET_TOKEN_DO_NOT_CHANGE_OR_YOU_WILL_BE_FIRED =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdlZDZiMzU3MjAyZjAwNmNjYjllZTQiLCJpYXQiOjE1ODUzNzA4MDN9.c9hDXScTXnbasV-ytWS5grG-BciYARKOHaDHjFRtuXE"
const DEFAULT_OPTIONS = {
  crossDomain: true,
  responseType: "json",
  headers: {
    Authorization: `Bearer ${SUPER_SECRET_TOKEN_DO_NOT_CHANGE_OR_YOU_WILL_BE_FIRED}`,
    "Content-Type": "application/json"
  }
}

const api = {
  request: async function({ url, method, data = {}, options = {} }) {
    if (process.env.mocks) return new Promise((resolve) => setTimeout(() => resolve(mocks[url]), 1000));

    try {
      const response = await axios(BASE_URL + url, {
        ...DEFAULT_OPTIONS,
        method,
        data
      })
      if (response.status !== 200) throw response
      return response.data
    } catch (error) {
      return error
    }
  },
  user: {
    me: function() {
      /**
       * {
       *   _id: string,
       *   name: string,
       *   points: number,
       *   __v: number,
       *   redeemHistory: any[],
       *   createDate: string,
       * }
       */
      return api.request({ url: "/user/me", method: "GET" })
    },
    points: function(amount) {
      /**
       * {
       *   message: string,
       *   "New Points": number,
       * }
       */
      return api.request({
        url: "/user/points",
        method: "POST",
        data: { amount }
      })
    },
    history: function() {
      /**
       * {
       *   productId: string,
       *   name: string,
       *   cost: number,
       *   category: string,
       *   _id: string,
       *   createDate: string,
       *   img: {
       *     url: string,
       *     hdUrl: string,
       *   },
       * }
       */
      return api.request({
        url: "/user/history",
        method: "GET"
      })
    }
  },
  redeem: function(productId) {
    /**
     * {
     *   productId: string,
     * }
     */
    return api.request({
      url: "/redeem",
      method: "POST",
      data: { productId }
    })
  },
  products: function() {
    /**
     * {
     *   _id: string,
     *   name: string,
     *   cost: number,
     *   category: string,
     *   img: {
     *     url: string,
     *     hdUrl: string,
     *   },
     * }
     */
    return api.request({
      url: "/products",
      method: "GET"
    })
  }
}

export default api
