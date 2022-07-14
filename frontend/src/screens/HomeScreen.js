import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useLocation } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

function HomeScreen() {
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;
  const { search } = useLocation();

  let keyword = search;
  console.log(keyword);
  useEffect(() => {
    dispatch(listProducts(keyword));

    // async function fetchProduct() {
    //   const { data } = await axios.get('/api/products/')
    //   setProducts(data)
    // }

    // //////////
    // // then 대신에 const { data } 이렇게 해버리면 된다
    // // http:127.0.0.1:8000 지우고 package.json 에 proxy 설정해주면됨
    // // 서버 껏다 다시 켜줘야됨
    // //////////

    // fetchProduct()
  }, [dispatch, keyword]);

  return (
    <div>
      <ProductCarousel />
      <h1>인기 상품</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.reverse().map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
