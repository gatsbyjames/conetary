import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNews, listNewsCoinDetail } from "../../actions/newsActions";
import { LinkContainer } from "react-router-bootstrap";

import { Row, Col, Button, ListGroup, Table } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useParams } from "react-router-dom";

function CoinNewsDetailScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coinNewsDetail = useSelector((state) => state.coinNewsDetail);
  const { laoding, error, news } = coinNewsDetail;

  useEffect(() => {
    dispatch(listNewsCoinDetail(id));
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <LinkContainer to={"/news/coin"} style={{ cursor: "pointer" }}>
            <h1>코인 뉴스</h1>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <h1>{news.subject}</h1>
          </ListGroup>
          <ListGroup>{news.content}</ListGroup>
          {news.comments.map((item) => (
            <ListGroup>{item.content}</ListGroup>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default CoinNewsDetailScreen;
