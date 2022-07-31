import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const redirect = search ? search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("입력하신 비밀번호가 같지 않습니다");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>회원가입</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>닉네임</Form.Label>
          <Form.Control
            // conrol 이라고 쓰니까 element type is invalid 라고뜸
            required
            type="name"
            placeholder="닉네임 입력"
            value={name || ""}
            onChange={(e) => setName(e.target.value.trim())}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="이메일 입력"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="비밀번호 입력"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordConfirm">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          가입하기
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          이미 계정이 있으신가요??{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            로그인 하러가기
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;
