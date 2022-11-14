import Category from "../components/Category";
import { CategoryData } from "../data";
import { Link } from "react-router-dom";
import "./Header.css";
import "./Base.css";
import "../fontawesome/css/all.min.css";

function Header() {
  return (
    <div className="grid">
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
            <ul className="header__navbar-list header__navbar-list-right ">
              <a href="aa" className="header__navbar-icon-link">
                <i className="header__navbar-icon fa-solid fa-cart-shopping"></i>
              </a>

              <li className="header__navbar-item header__navbar-text">
                Giỏ hàng
              </li>

              <Link className="header__navbar-icon-link" to={"/profile"}>
                <i className="header__navbar-icon fa-regular fa-user"></i>
              </Link>

              <li className="header__navbar-item header__navbar-text header__navbar-item--separate">
                <Link className="focus" to={"/register"}>
                  Đăng nhập
                </Link>
              </li>
              <li className="header__navbar-item header__navbar-text">
                <Link className="focus" to={"/register"}>
                  Đăng ký
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <div className="category">
              {CategoryData.map((item, index) => (
                <Link
                  style={{ fontSize: "29px", color: "#333399" }}
                  to={item.cate_href}
                >
                  <Category
                    key={item.cate_id}
                    cate_name={item.cate_name}
                  ></Category>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
