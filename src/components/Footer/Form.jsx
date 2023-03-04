import React from "react";
import Button from "../Button";

const Form = () => {
  const style = {
    form: `flex flex-col gap-[20px]`,
    title: `text-4xl`,
  };

  return (
    <form className={`${style.form} form`}>
      <h3 className={style.title}>GET IN TOUCH</h3>
      <input
        type="text"
        name="name"
        placeholder="NAME"
        id=""
        className={style.name}
      />
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        id=""
        className={style.email}
      />
      <textarea
        name="message"
        id=""
        placeholder="MESSAGE"
        className={style.message}
      ></textarea>
      <Button btnText="SEND" />
    </form>
  );
};

export default Form;
