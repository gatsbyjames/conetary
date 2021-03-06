import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import SearchBox from "./SearchBox";

function Header() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Conetary</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="me-auto">
              <LinkContainer to="/price">
                <Nav.Link>
                  <i class="fa-brands fa-bitcoin"></i>코인시세
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/news">
                <Nav.Link>
                  <i class="fa fa-newspaper" aria-hidden="true">
                    뉴스
                  </i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/mall">
                <Nav.Link>
                  <i class="fa fa-credit-card-alt" aria-hidden="true">
                    쇼핑몰
                  </i>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>장바구니
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>장바구니
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>

            <Nav>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name.substring(0, 10)}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>프로필</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    로그아웃
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i>로그인
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link>
                      <i className="fa-solid fa-id-card"></i>회원가입
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
