import "../../App.css";
import "antd/dist/antd.css";
import Footer from "../../footer/Footer";
import { Carousel } from "antd";
import { ProData } from "../../data";
import Item from "../../components/Item";
import Header from "../../header/Header";

function Home() {
  return (
    <div className="grid">
      <div>
        <Header></Header>
      </div>
      <div>
        <div className="header1">
          <Carousel fade autoplay className="grid">
            <img style={contentStyle} src="./images/trc1.jpg" alt="1" />
            <img style={contentStyle} src="./images/trc2.jpg" alt="1" />
            <img style={contentStyle} src="./images/tr3.jpg" alt="1" />
          </Carousel>
        </div>
      </div>
      <h3
        align="left"
        style={{
          margin: "50px",
          fontWeight: "bold",
          color: "red",
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
      <div>
        <Footer></Footer>
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
export default Home;
