import axios from "axios";

const PRODUCTS_REST_API_URL = 'http://localhost:8090/webss/getAllProduct';

class ProductService {
    getProduct(){
        return axios.get(PRODUCTS_REST_API_URL);
    }
}
export default ProductService();