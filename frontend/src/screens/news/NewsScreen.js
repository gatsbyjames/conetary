import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNews } from "../../actions/newsActions";
import { Link, useLocation, use } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Button, ListGroup, Badge } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function NewsScreen() {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.newsList);
  const { laoding, error, news } = newsList;
  console.log(news);

  useEffect(() => {
    dispatch(listNews());
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <LinkContainer to={"/news/coin"} style={{ cursor: "pointer" }}>
            <h1>코인 뉴스</h1>
          </LinkContainer>
          <ListGroup>
            {news
              ?.filter((item) => item.category == "코인")
              .slice(0, 12)
              .map((item) => (
                <ListGroup.Item key={item.news}>
                  <LinkContainer
                    to={`/news/coin/${item.id}`}
                    style={{ cursor: "pointer" }}
                  >
                    <Row>
                      <Col>{item.subject}</Col>
                      <Col>{item.create_date.substring(0, 10)}</Col>
                    </Row>
                  </LinkContainer>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>

        <Col>
          <LinkContainer to={"/news/stock"} style={{ cursor: "pointer" }}>
            <h1>주식 뉴스</h1>
          </LinkContainer>
          <ListGroup>
            {news
              ?.filter((item) => item.category == "주식")
              .slice(0, 12)
              .map((item) => (
                <ListGroup.Item key={item.news}>
                  <LinkContainer
                    to={`/news/coin/${item.id}`}
                    style={{ cursor: "pointer" }}
                  >
                    <Row>
                      <Col>{item.subject}</Col>
                      <Col>{item.create_date.substring(0, 10)}</Col>
                    </Row>
                  </LinkContainer>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <LinkContainer to={"/news/coin"} style={{ cursor: "pointer" }}>
            <h1>코인 게시판</h1>
          </LinkContainer>
          <ListGroup>
            {news
              ?.filter((item) => item.category == "코인 게시판")
              .slice(0, 8)
              .map((item) => (
                <ListGroup.Item key={item.news}>
                  <LinkContainer
                    to={`/news/coin/${item.id}`}
                    style={{ cursor: "pointer" }}
                  >
                    <Row>
                      <Col>{item.subject}</Col>
                      <Col>{item.create_date.substring(0, 10)}</Col>
                    </Row>
                  </LinkContainer>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>

        <Col>
          <LinkContainer to={"/news/stock"} style={{ cursor: "pointer" }}>
            <h1>주식 게시판</h1>
          </LinkContainer>
          <ListGroup>
            {news
              ?.filter((item) => item.category == "주식 게시판")
              .slice(0, 8)
              .map((item) => (
                <ListGroup.Item key={item.news}>
                  <LinkContainer
                    to={`/news/coin/${item.id}`}
                    style={{ cursor: "pointer" }}
                  >
                    <Row>
                      <Col>{item.subject}</Col>
                      <Col>{item.create_date.substring(0, 10)}</Col>
                    </Row>
                  </LinkContainer>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default NewsScreen;
