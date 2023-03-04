import Button from "./Button";
import arrow from "../assets/arrow.png";

const Cta = () => {
  const style = {
    container: `h-[50rem] text-white`,
    content: `relative`,
    ctaBlock: `max-w-[30rem] flex flex-col gap-4`,
    arrow: `absolute top-[50%] left-[25%] w-[20rem]`,
  };

  return (
    <div className={`${style.container} cta`}>
      <div className={`${style.content} container`}>
        <div className={style.ctaBlock}>
          <h2>
            Enjoy <span>Breakfast</span>
          </h2>
          <h3>
            25% <span>OFF</span>
          </h3>
          <img
            src={arrow}
            className={style.arrow}
            alt="Image of a twisted arrow"
          />
          <p>
            It was popularised in the 1960s with the release of Letraset sheets.
          </p>
          <Button btnText="see more" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
