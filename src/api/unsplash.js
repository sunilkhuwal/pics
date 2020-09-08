import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8Z4U1RUV2npdNZOhtXc-xKtBr3JFgcWW37I7dW32I8U",
  },
});
