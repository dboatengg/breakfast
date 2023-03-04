const Button = ({ btnText }) => {
  const style = {
    btn: `py-[16px] px-[50px] text-4xl bg-brand-yellow mdMax:py-[15px] mdMax:px-[40px]`,
  };
  return (
    <div>
      <button className={style.btn}>{btnText}</button>
    </div>
  );
};

export default Button;
