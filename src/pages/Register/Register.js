/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg";
class Register extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-10 col-md-12 col-lg-12">
              <div class="user-form-logo">
                <Link to={"/"}>
                  <img
                    src="./images/logo1.png"
                    alt="1"
                    style={{ margin: "10px", padding: "10px", width: "400px" }}
                  />
                </Link>
              </div>
              <div class="user-form-card">
                <div class="user-form-title">
                  <h2>Tham gia ngay!</h2>
                  <p>Nhập thông tin để tạo tài khoản</p>
                </div>
                <form class="user-form">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Họ tên"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Nhập lại mật khẩu"
                    />
                  </div>
                  <div class="form-button">
                    <button type="submit">Đăng ký</button>
                  </div>
                </form>
              </div>
              <div class="user-form-remind">
                <p>
                  Bạn đã có tài khoản? <Link to={"/login"}></Link>Đăng nhập
                </p>
              </div>

              {/* <Link to={/"login"}>Đăng nhập</Link> */}
              <div class="user-form-footer">
                <p>&copy; Bản quyền thuộc về SamSung Cosmetic</p>
              </div>
            </div>
          </div>
        </div>
        {/* <ChildComponent></ChildComponent> */}
      </>
    );
  }
}
export default Register;
