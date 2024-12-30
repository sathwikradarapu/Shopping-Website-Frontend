import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>
            <a>Men</a>
            <a>Women</a>
            <a>Kids</a>
            <a>Home & Living</a>
            <a>Beauty</a>
          </div>
          <div className="footer_column">
            <h3>EXPERIENCE TREND RUSH APP ON MOBILE</h3>
            <div className="d-flex flex-row">
              <img src="../images/playstore.svg.webp" className="new_image" />
              <img
                src="../images/download-on-the-app-store-apple-logo-png-transparent.png"
                className="new_image"
              />
            </div>
          </div>
          <div className="footer_column">
            <h3>KEEP IN TOUCH</h3>
            <div className="d-flex flex-row">
              <FaFacebook className="new_logo"></FaFacebook>
              <FaTwitter className="new_logo"></FaTwitter>
              <AiFillInstagram className="new_logo"></AiFillInstagram>
            </div>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2024 www.trendrush.com. All rights reserved.
        </div>
      </footer>
    </>
  );
};
export default Footer;
