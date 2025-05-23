import React, { useContext } from "react";
import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Footer.css";
import { AuthContext } from "../../Context/AuthContext";

const Footer = () => {
    const { user } = useContext(AuthContext);
      const links = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/exploreGardening">Explore Gardeners</NavLink>
          </li>
          <li>
            <NavLink to="/browserTips">Browse Tips </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/gardenTips"> Garden Tip</NavLink>
              </li>
              <li>
                <NavLink to="/myTips">My Tips</NavLink>
              </li>
            </>
          )}
        </>
      );
  return (
    <footer className="bg-green-100 text-green-900 py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-green-700" /> support@gardenhub.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-700" /> +1 (800) 123-4567
          </p>
        </div>

        {/* Terms and Policies */}
        <div>
          <h3 className="font-bold text-lg mb-3">Legal</h3>
          <ul className="space-y-2">
           {links}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-green-800 text-xl">
            <NavLink to="/facebook" className="hover:text-green-600">
              <FaFacebookF />
            </NavLink>
            <NavLink to="/instagram" className="hover:text-green-600">
              <FaInstagram />
            </NavLink>
            <NavLink to="/twitter" className="hover:text-green-600">
              <FaTwitter />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm text-green-700">
        © {new Date().getFullYear()} Gardening Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
