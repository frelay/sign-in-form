import { useState } from "react";
import "./Form.css";
import checkForm from "../utils/checkForm";

export default function Form() {
  const [data, setData] = useState({ email: "", password: "" });

  function handleForSubmit(e) {
    e.preventDefault();

    checkForm(data.email, data.password);
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <form className="form" onSubmit={handleForSubmit}>
      <img
        className="form__img"
        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt="Logo"
      />
      <h1 className="form__title">Please sign in</h1>
      <div className="form__inputs-wrapper">
        <input
          className="form__input form__input_email"
          type="email"
          name="email"
          placeholder="Email address"
          value={data.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <input
          className="form__input form__input_password "
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
      </div>
      <div className="form__checkbox-wrapper">
        <input className="form__checkbox" type="checkbox" name="remember" />
        <label htmlFor="remember" className="form__btn-label">
          Remember me
        </label>
      </div>
      <button className="form__btn" type="submit">
        Sign in
      </button>
    </form>
  );
}
