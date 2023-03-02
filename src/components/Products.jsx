import lunch from "../assets/lunch.png";
import Button from "./Button";

const Products = () => {
  const style = {
    content: `flex items-center flex-wrap justify-between`,
    block: `max-w-[30rem] flex item-center flex-col gap-5`,
  };

  return (
    <div className={style.container}>
      <div className={`${style.content} container`}>
        <div className={style.block}>
          <img src={lunch} alt="" />
          <h3>Lunch + dinner</h3>
          <p>It was popularised in the 1960s with the release.</p>
          <Button />
        </div>
        <div className={style.block}>
          <img src={lunch} alt="" />
          <h3>Lunch + dinner</h3>
          <p>It was popularised in the 1960s with the release.</p>
          <Button />
        </div>
        <div className={style.block}>
          <img src={lunch} alt="" />
          <h3>Lunch + dinner</h3>
          <p>It was popularised in the 1960s with the release.</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Products;
