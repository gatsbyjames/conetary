import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNews } from "../../actions/newsActions";
import { LinkContainer } from "react-router-bootstrap";

import { Row, Col, Button, ListGroup, Table } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function StockNewsScreen() {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.newsList);
  const { laoding, error, news } = newsList;
  console.log(news);

  useEffect(() => {
    dispatch(listNews());
  }, []);

  const createNewsHandler = () => {
    console.log("hi");
  };

  return (
    <div>
      <Row>
        <Col>
          <LinkContainer to={"/news/coin"} style={{ cursor: "pointer" }}>
            <h1>주식 뉴스</h1>
          </LinkContainer>
        </Col>
        <Col>
          <LinkContainer to={`/news/coin/write`}>
            <Button
              variant="light"
              className="btn-sm"
              onClick={createNewsHandler}
            >
              <h3>
                <i className="fas fa-edit">쓰기</i>
              </h3>
            </Button>
          </LinkContainer>
        </Col>
        <Table striped bordered hover>
          <thead>
            <td>번호</td>
            <td>제목</td>
            <td>닉네임</td>
            <td>날짜</td>
          </thead>

          <tbody>
            {news
              ?.reverse()
              .slice(0, 25)
              .filter((item) => item.category == "주식")
              .map((item) => (
                <LinkContainer
                  to={`/news/coin/${item.id}`}
                  style={{ cursor: "pointer" }}
                >
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.subject}</td>
                    <td>{item.author}</td>
                    <td>{item.create_date.substring(0, 10)}</td>
                  </tr>
                </LinkContainer>
              ))}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col>
          <ListGroup></ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default StockNewsScreen;
