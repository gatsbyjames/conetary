import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNews,
  dislikeNews,
  factNews,
  fakeNews,
  likeNews,
  listNews,
  listNewsCoinDetail,
  undislikeNews,
  unfactNews,
  unlikeNews,
  unfakeNews,
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
  const [like, setLike] = useState(false);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState({});

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

  const likeHandler = (id) => {
    dispatch(likeNews({ id: news.id }));
  };

  const dislikeHandler = (id) => {
    dispatch(dislikeNews({ id: news.id }));
  };

  const factHandler = (id) => {
    dispatch(factNews({ id: news.id }));
  };

  const fakeHandler = (id) => {
    dispatch(fakeNews({ id: news.id }));
  };

  const unlikeHandler = (id) => {
    dispatch(unlikeNews({ id: news.id }));
  };
  const undislikeHandler = (id) => {
    dispatch(undislikeNews({ id: news.id }));
  };
  const unfactHandler = (id) => {
    dispatch(unfactNews({ id: news.id }));
  };
  const unfakeHandler = (id) => {
    dispatch(unfakeNews({ id: news.id }));
  };

  const likeDislike = [
    { name: "좋아요", value: "1" },
    { name: "싫어요", value: "2" },
  ];

  const factFake = [
    { name: "팩트", value: "3" },
    { name: "페이크", value: "4" },
  ];

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

      <Button
        onClick={async (e) => {
          setLike(!like);
        }}
        className="btn btn-light"
      >
        {like ? (
          <i className="fas fa-heart like-color" onClick={likeHandler(id)}>
            좋아요
          </i>
        ) : (
          <i className="far fa-heart" onClick={unlikeHandler(id)}>
            좋아요
          </i>
        )}{" "}
      </Button>
      <Button onClick={() => updateHandler(id)}>수정</Button>
      <Button onClick={() => deleteHandler(id)}>삭제</Button>
    </div>
  );
}

export default CoinNewsDetailScreen;
