import React from "react";
import Logo from "../assets/logo.svg";
import contact from "../assets/contact.svg";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page__header">Contact Us</div>

      <div className="contact-page__form-wrapper">
        <div className="contact-page__form-left">
          <img
            src={Logo}
            alt="logo"
            className="contact-page__form-left__logo"
          />
          <div className="contact-image-wrapper">
            <img src={contact} alt="contact icon" className="contact-image" />
          </div>
        </div>

        <form className="contact-page__form">
          <div className="form-group">
            <label for="name" className="form-group__label">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder=""
              className="form-group__input"
            />
          </div>
          <div className="form-group">
            <label for="email" className="form-group__label">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder=""
              className="form-group__input"
            />
          </div>
          <div className="form-group">
            <label for="message" className="form-group__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder=""
              className="form-group__textarea"
            />
          </div>
          <button type="submit" className="contact-page__form__submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
