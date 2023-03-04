import lunch from "../assets/lunch.png";
import deserts from "../assets/deserts.png";
import whiskey from "../assets/whiskey.png";
import Button from "./Button";

const Products = ({ btnText }) => {
  const style = {
    container: `bg-brand-gray py-[100px]`,
    content: `flex flex-wrap items-end gap-[30px]`,
    block: `flex flex-col items-center max-w-[24rem] mx-auto text-center gap-5 grid-cols-1`,
  };

  return (
    <div className={style.container}>
      <div className={`${style.content} container`}>
        <div className={style.block}>
          <img src={lunch} alt="" />
          <h3>Lunch + dinner</h3>
          <p>It was popularised in the 1960s with the release.</p>
          <Button btnText="see more" />
        </div>
        <div className={style.block}>
          <img src={deserts} alt="" />
          <h3>Lunch + dinner</h3>
          <p>It was popularised in the 1960s with the release.</p>
          <Button btnText="see more" />
        </div>
        <div className={style.block}>
          <img src={whiskey} alt="" />
          <h3>Lunch + dinner</h3>
          <p>It was popularised in the 1960s with the release.</p>
          <Button btnText="see more" />
        </div>
      </div>
    </div>
  );
};

export default Products;
