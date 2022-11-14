import React from "react";
import ProductService from "../service/ProductService";
class ProductsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        ProductService.getProducts().then((response) => {
            this.setState({ products: response.data})
        });
    }
   
    render (){
        return(
            <>
                <div>
                <h1 className = "text-center"> Products List</h1>
                {/* <div className="container">
                    <div className="row">
                        <div className="list-products">
                            {
                                this.state.products.map(
                                   product =>
                                   <div className="item-product">
                                        <div className="image"></div>
                                        <div className="info">
                                            <div className="name-product"></div>
                                            <div className="price">j</div>
                                        </div>
                                   </div> 
                                )
                            }

                        </div>
                    </div>
                </div> */}
                <table className = "table-striped">
                    <thead>
                        <tr>
                            <td> Product Id</td>
                            <td> Product Image</td>
                            <td> Price</td>
                            <td> Brand Id</td>
                            <td> Product Name</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                products => 
                                <tr key = {products.pr_id}>
                                     <td> {products.pr_image}</td>   
                                     <td> {products.pr_price}</td>   
                                     <td> {products.brand_id}</td>   
                                     <td> {products.pr_name}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
export default ProductsComponent();