import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";

const GET_PRODUCT_LIST_API = 'https://fakestoreapi.com/products'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const getProductList = useCallback(async() => {
        const getProductListResponse = await axios.get(GET_PRODUCT_LIST_API);
        const productList = getProductListResponse?.data
        console.log(productList)
        setProducts(productList)
    }, [])

    useEffect(() => {
        getProductList()
    },[])

    return (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products && products.map(product => <ProductItem key={product.id} product={product} />)}
        </div>
    )
}

export default ProductList;