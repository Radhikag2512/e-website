import React,{useEffect} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from "../redux/actions/action"

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
console.log( products);
  const fetchProducts = async() => {
    const response = await axios
    .get('https://dummyjson.com/products')
    .catch((err) => {
      console.log("Error", err);
    });
    dispatch(setProducts(response.data));
  };
  
  useEffect(() => {
    fetchProducts();
  },[]);

  console.log("Products: ",products);

  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;