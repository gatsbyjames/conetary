import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNews,
  listNews,
  listNewsCoinDetail,
} from "../../actions/newsActions";
import { LinkContainer } from "react-router-bootstrap";

import { Row, Col, Button, ListGroup, Table } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useNavigate, useParams } from "react-router-dom";

function CoinNewsDetailScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const newsDetail = useSelector((state) => state.newsDetail);
  const { laoding, error, news } = newsDetail;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listNewsCoinDetail(id));
  }, []);

  const updateHandler = (id) => {
    navigate(`/news/coin/update/${id}`);
  };

  const deleteHandler = (id) => {
    dispatch(deleteNews(id));
    navigate("/news/coin");
  };

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
      <Button onClick={() => updateHandler(id)}>수정</Button>
      <Button onClick={() => deleteHandler(id)}>삭제</Button>
    </div>
  );
}

export default CoinNewsDetailScreen;
