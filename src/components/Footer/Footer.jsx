import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import Form from "./Form";

const Footer = () => {
  const style = {
    container: `py-[150px] text-brand-white`,
    title: `text-5xl text-brand-yellow mb-[20px]`,
    block: `grid grid-cols-3 gap-[20px] mdMax:grid-cols-1 mdMax:gap-[40px]`,
    form: `span-col-1`,
    info: `span-col-1 max-w-[30rem] flex flex-col gap-[30px]`,
    infoBlock: `flex flex-col gap-3`,
    icons: `span-col-1 justify-self-center flex flex-col text-5xl gap-[4rem] mdMax:flex-row mdMax:justify-self-start mdMax:text-4xl`,
    icon: `cursor-pointer transition duration-300 ease-in-out hover:text-brand-yellow `,
  };

  return (
    <div className={`${style.container} footer`}>
      <div className={`${style.content} container`}>
        <h2 className={style.title}>CONTACT US</h2>
        <div className={style.block}>
          <div className={style.info}>
            <p>
              It as popularized in the 1960s with the release of Latrasel sheets
            </p>
            <div className={style.infoBlock}>
              <p>TEL: (202) 345-0400</p>
              <p>EMAIL: INFO@MOODYFOOD.COM</p>
              <p>5420 3RD ST.NW. WASHINGTON</p>
            </div>
          </div>
          <Form className={style.form} />
          <div className={style.icons}>
            <a href="#">
              <AiOutlineTwitter className={style.icon} />
            </a>
            <a href="#">
              <AiOutlineInstagram className={style.icon} />
            </a>
            <a href="#">
              <FaFacebookF className={style.icon} />
            </a>
            <a href="#">
              <GrLinkedinOption className={style.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
