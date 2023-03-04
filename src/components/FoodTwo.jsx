import foodtwo from "../assets/foodtwo_bg.png";
import Button from "./Button";

const FoodTwo = () => {
  const style = {
    container: `bg-brand-black`,
    content: `grid grid-cols-2 items-center lgMax:grid-cols-1 lgMax:grid-rows-2 `,
    title: `text-[4rem] lgMax:text-[3rem]`,
    left: `span-col-1 lgMax:span-row-1`,
    right: `span-col-1 max-w-[450px] text-brand-white mx-auto flex flex-col justify-center gap-4 py-[30px] lgMax:max-w-[90%] lgMax:text-center lgMax:span-row-1`,
    img: `h-[55rem] w-[100%] object-cover lgMax:h-[40rem]`,
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.left}>
          <img src={foodtwo} alt="" className={style.img} />
        </div>
        <div className={style.right}>
          <h2 className={style.title}>DELICIOUS FOOD, RICH & HEALTHY</h2>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <Button btnText="see more" />
        </div>
      </div>
    </div>
  );
};

export default FoodTwo;
