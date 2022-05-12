import React, { useEffect, useState } from "react";
import {
  fetchProductsByFilter,
  getProductsByCount,
} from "../functions/product";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  //## 1. LOAD PRODUCTS BY DEFAULT
  useEffect(() => {
    loadAllProducts();
  }, []);
  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(12).then((p) => {
      setLoading(false);
      setProducts(p.data);
    });
  };

  //## 2. LOAD PRODUCTS BY SEARCH INPUT
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
    }, 300);

    return () => clearTimeout(delayed);
  }, [text]);

  const fetchProducts = (arg) => {
    setLoading(true);
    fetchProductsByFilter(arg).then((res) => {
      setLoading(false);
      setProducts(res.data);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">search/filter</div>
        <div className="col-md-9">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="text-success">Products</h4>
          )}
          {products.length < 1 && <p>No products found</p>}
          <div className="row">
            {products.map((p) => {
              return (
                <div key={p._id} className="col-md-4 mt-3">
                  <ProductCard product={p} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
