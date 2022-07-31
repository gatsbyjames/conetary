import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused
  // useState 에 '' 안 넣으니까 이 뜸

  // 500 erro 는 / 를 안넣어서, 401 error 는 django signal 때문에

  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = search ? search.split("=")[1] : "/";
  // 로그인 성공 시 홈으로 보내주는 코드

  const userLogin = useSelector((state) => state.userLogin);
  // useSelector 이새끼가 ㅋㅋ store.js 에서 reducer 가져오는 새끼임
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>로그인</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          로그인
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          코네타리가 처음이신가요?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            회원가입
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
