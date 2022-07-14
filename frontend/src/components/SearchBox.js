import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col>
          <Form.Control
            style={{ width: 300 }}
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </Col>
        <Col>
          <Button
            type="submit"
            variant="outline-success"
            className="p-2"
            style={{ width: 100, marginRight: "150px" }}
          >
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
