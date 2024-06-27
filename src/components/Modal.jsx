import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Modal = () => {
  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className=" screen_max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
      </div>
    </section>
  );
};

export default Modal;