import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="help">
          <h5>Help</h5>
          <p className="helpItem">FAQ</p>
          <p className="helpItem">Delivery</p>
          <p className="helpItem">Product Fault</p>
          <p className="helpItem">Returns/Exchange</p>
          <p className="helpItem">Stores</p>
        </div>
        <div className="services">
          <h5>Services</h5>

          <p className="serviceItem">Repairs</p>
          <p className="serviceItem">Customization</p>
          <p className="serviceItem">Download our Apps</p>
          <p className="serviceItem">Delivery Tracker</p>
          <p className="serviceItem">Gift Card</p>
        </div>
        <div className="socialMedia">
          <h5>Connect</h5>
          <p>
            Call us <IoIosCall /> 0402294235
          </p>
          <div className="media">
            <FaFacebookF className="mediaitem" />
            <FaInstagram className="mediaitem" />
            <FaTiktok className="mediaitem" />
          </div>
          <div className="subscribe">
            <input placeholder="Enter Your Email" />
            <button>Summit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
