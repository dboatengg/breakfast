const Button = () => {
  const style = {
    btn: `py-[20px] px-[60px] bg-brand-yellow mdMax:py-[15px] mdMax:px-[40px]`,
  };
  return (
    <div>
      <button className={style.btn}>see more</button>
    </div>
  );
};

export default Button;
