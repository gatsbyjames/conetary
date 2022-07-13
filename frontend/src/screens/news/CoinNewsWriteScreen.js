import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { createNews } from "../../actions/newsActions";

function CoinNewsWriteScreen() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const category = "코인";

  const dispatch = useDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const redirect = search ? search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createNews(subject, content, category));
    navigate("/news/coin");
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });

  return (
    <FormContainer>
      <h1>쓰기</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="subject">
          <Form.Label>제목</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="입력"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form onSubmit={submitHandler}></Form>
        <Form.Group controlId="subject">
          <Form.Label>내용</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="입력"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          등록
        </Button>
      </Form>
    </FormContainer>
  );
}

export default CoinNewsWriteScreen;
