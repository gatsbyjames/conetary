import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import reactDev from "../assets/images/reactDev.png";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  h1: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 52,
      textAlign: "center",
    },
    paddingLeft: "20px",
    fontFamily: "'Titillium Web', sans-serif",
    paddingTop: "2.5rem",
    color: "#454CCC",
  },
  p: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      width: "auto",
      textAlign: "center",
    },
    paddingLeft: "20px",
    fontFamily: "'Titillium Web', sans-serif",
    paddingTop: "2.5rem",
    display: "flex",
    width: "600px",
  },
  grid: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10px",
      paddingLeft: "10px",
    },
    boxShadow: 0,
    display: "flex",
    // paddingLeft: "150px",
    // paddingRight: "150px",
    paddingBottom: "1.5rem",
    backgroundColor: "white",
  },
  mainText: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "2px",
      paddingLeft: "2px",
    },
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  btn: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "40px",
      display: "flex",
    },
    padding: "0.8rem",
    width: "200px",
    marginLeft: "30px",
    marginTop: "1.5rem",
    boxShadow: 3,
    color: "white",
  },
}));
const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const styling = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid className={styling.grid}>
        <Grid
          item
          xs={12}
          md={6}
          className={styling.mainText}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1">
            코인으로 <br />
            쇼핑하는 시대
          </Typography>
          <Typography variant="h5" className={styling.p}>
            코네타리와 함께 더 쉽고 편하게 쇼핑해요!
          </Typography>
          {isMobile ? <img src={reactDev} alt="header" /> : ""}
          <div>
            <Link to="/mall">
              <Button
                variant="contained"
                color="primary"
                className={styling.btn}
              >
                <ShoppingCartIcon
                  sx={{ marginRight: "5px", marginBottom: "4px" }}
                />{" "}
                쇼핑 하러가기
              </Button>
            </Link>
            {userInfo ? (
              <Link to="/price">
                <Button
                  variant="contained"
                  color="primary"
                  className={styling.btn}
                >
                  <LoginIcon sx={{ marginRight: "5px", marginBottom: "4px" }} />{" "}
                  코인 시세확인
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button
                  variant="contained"
                  color="primary"
                  className={styling.btn}
                >
                  <LoginIcon sx={{ marginRight: "5px", marginBottom: "4px" }} />{" "}
                  로그인
                </Button>
              </Link>
            )}
          </div>
        </Grid>
        <Grid>{!isMobile ? <img src={reactDev} alt="header" /> : ""}</Grid>
      </Grid>
    </>
  );
};
export default HomeScreen;
