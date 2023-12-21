import axios from "axios";

export class APIProduct {
  static async fetchProducts() {
    return (await axios.get("https://fakestoreapiserver.reactbd.com/products"))
      .data;
  }
}
