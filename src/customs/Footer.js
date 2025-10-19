import React from "react";
import "../styles/customsStyle/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-[#001135] text-white flex justify-around py-10 px-15 flex-wrap mt-auto">
      <div className="footer-section flex flex-col m-0 min-w-[200px] text-left">
        <h4 className="footer-title font-bold text-base uppercase mb-5 text-white">ABOUT US</h4>
        <ul className="list-none p-0 m-0">
          <li className="my-2"><a href="#who" className="text-white no-underline text-sm font-normal hover:underline">Who we are</a></li>
          <li className="my-2"><a href="#mission" className="text-white no-underline text-sm font-normal hover:underline">Mission</a></li>
          <li className="my-2"><a href="#vision" className="text-white no-underline text-sm font-normal hover:underline">Vision</a></li>
        </ul>
      </div>

      <div className="footer-section flex flex-col m-0 min-w-[200px] text-left">
        <h4 className="footer-title font-bold text-base uppercase mb-5 text-white">CUSTOMER CARE</h4>
        <ul className="list-none p-0 m-0">
          <li className="my-2"><a href="#faqs" className="text-white no-underline text-sm font-normal hover:underline">FAQs</a></li>
          <li className="my-2"><a href="#feedback" className="text-white no-underline text-sm font-normal hover:underline">Feedback & Inquiry</a></li>
        </ul>
      </div>

      <div className="footer-section flex flex-col m-0 min-w-[200px] text-left">
        <h4 className="footer-title font-bold text-base uppercase mb-5 text-white">PARTNERSHIPS</h4>
        <ul className="list-none p-0 m-0">
          <li className="my-2"><a href="#nu-moa" className="text-white no-underline text-sm font-normal hover:underline">NU MOA</a></li>
          <li className="my-2"><a href="#playstation" className="text-white no-underline text-sm font-normal hover:underline">PlayStation</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
