import aboutImg from "../assets/about__img.webp";
import { Link } from "react-router-dom";

const About = () => {
  const style = {
    container: `relative bg-brand-gray`,
    content: `flex items-center justify-center flex-col gap-[20px] container py-[80px]`,
    aboutImg: `h-auto max-w-[100%] lgMax:w-[80%] lg:w-[70%]`,
    text: `text-center max-w-[800px] w-[90% mx-auto]`,
    block: `block`,
    title: `text-center text-4xl mdMax:text-3xl`,
    btn: `py-3 px-8 bg-brand-yellow`,
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>
          ENJOY
          <span className={style.block}>DELICIOUS FOOD, RICH & HEALTHY</span>
        </h2>
        <p className={style.text}>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <img
          className={style.aboutImg}
          src={aboutImg}
          alt="image of two bowls with grapes"
        />
        <Link className={style.btn}>See more</Link>
      </div>
    </div>
  );
};

export default About;
