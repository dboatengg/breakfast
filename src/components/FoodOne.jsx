import Button from "./Button";
import foodone from "../assets/food__one.webp";

const FoodOne = () => {
  const style = {
    container: `w-full py-[100px] bg-brand-gray relative mdMax:py-[60px]`,
    content: `h-full grid grid-cols-2 items-center justify-center mdMax:grid-cols-1`,
    left: `flex flex-col span-col-1 max-w-[380px] gap-4 xl:max-w-[80%] mdMax:order-2 mdMax:max-w-[100%] mdMax:text-center `,
    right: `span-col-1 flex items-center justify-center mdMax:order-1 `,
    text: `hyphens-auto mb-[40px] mdMax:mb-[0]`,
    img: `mx-auto w-[50rem] mdMax:w-[30rem]`,
    title: `text-[4rem] uppercase mdMax:text-[3.5rem]`,
    titleSpan: `block xl:inline`,
  };

  return (
    <div className={`${style.container} foodone`}>
      <div className={`${style.content} content container`}>
        <div className={`${style.left} foodone__left`}>
          <h2 className={`${style.title}`}>
            Delicious food,
            <span className={style.titleSpan}>rich & healthy</span>
          </h2>
          <p className={style.text}>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <Button btnText="see more" />
        </div>
        <div className={`${style.right} foodone__right`}>
          <img className={`${style.img} img`} src={foodone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodOne;
