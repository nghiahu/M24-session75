import axios from "axios";

export const getProducts = async () => {
    const responese:any = await axios.get("http://localhost:8080/product");
    return responese.data
}
export const getCart = async () => {
    const responese:any = await axios.get("http://localhost:8080/cart");
    return responese.data
}