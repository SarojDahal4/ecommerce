import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import "./footer.css"

function Seconfooter() {
  return (
    <>
    <div className="secondfooter">
      <div className="text">
        <p>
          Discover more, shop with ease. 🛍️✨ Your style, your choice, delivered
          fast! 🚀
        </p>
      </div>
      <div className="termcond">TERMS & CONDITIONS PRIVACY POLICY</div>

      <div className="payment">
        <h5>We Accept</h5>
        <span>
          <FaCcVisa /> <FaCcPaypal /> <FaCcMastercard />
        </span>

        <h5>Delivery partner</h5>
        <h6>Austrail Post</h6>
      </div>

      <div className="copyright">
        <h4>© 2025 Sarose| All rights reserved</h4>
      </div>
      </div>
    </>
  );
}

export default Seconfooter;
