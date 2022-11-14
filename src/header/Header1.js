import Category from "../components/Category";
import { CategoryData } from "../data";
import { Link } from "react-router-dom";
import "../fontawesome/css/all.min.css";
import "./Header1.css";
import "./Base.css";
import "../App.css";

import Item from "../components/Item";
import { ProData } from "../data";
import { Carousel } from "antd";
import "antd/dist/antd.css";

function Header1() {
  return (
    <div>
      <div className="app">
        <header className="header1">
          <div className="grid">
            <nav className="header__navbar">
              <ul className="header__navbar-list">
                <li className="header__navbar-item">
                  <Link to={"/"}>
                    <img
                      className="header__navbar-item"
                      src="./images/logo1.png"
                      alt="logo"
                      style={{ width: "160px", height: "60px" }}
                    />
                  </Link>
                </li>
                <li className="header__navbar-item">
                  <div className="box">
                    <input type="text" placeholder="Search here" />
                    <a>
                      <i className="fas fa-search-location" />
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="header__navbar-list">
                <li className="header__navbar-item">
                  <a href="11"></a>
                </li>
                <li className="header__navbar-item no-point"> Giỏ hàng</li>

                <li className="header__navbar-item ">
                  <Link to={"/trangchu"}></Link>
                </li>
                <li className="header__navbar-item header__navbar-link header__navbar-item--separate">
                  Đăng nhập
                </li>
                <li className="header__navbar-item header__navbar-link">
                  Đăng ký
                </li>
                <li className="header__navbar-item">
                  <Link to={"/trangchu"}></Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="header1">
          <Carousel fade autoplay>
            <div>
              <h3 style={contentStyle}>
                <img src="./images/trc1.jpg" alt="1" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src="./images/trc2.jpg" alt="1" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src="./images/tr3.jpg" alt="1" />
              </h3>
            </div>
          </Carousel>
        </div>
        <h3
          align="left"
          style={{
            margin: "50px",
            fontWeight: "bold",
            color: "bluedark",
            fontSize: "25px",
          }}
        >
          Sản phẩm nổi bật:
        </h3>

        <div className="pro-list">
          {ProData.map((item, index) => {
            // eslint-disable-next-line eqeqeq
            if (item.pr_hot == 1) {
              console.log("middle item");
              return (
                <Item
                  key={item.pr_id}
                  image={item.pr_image || "./images/default_image.jpg"}
                  price={item.pr_price}
                  name={item.pr_name}
                  brand={item.pr_brand}
                >
                  <h2>aaa</h2>
                </Item>
              );
            }
          })}
        </div>

        <div className="container" />
        <footer className="footer" />
      </div>
    </div>
  );
}
const contentStyle = {
  height: "100%",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default Header1;
