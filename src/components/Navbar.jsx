import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const style = {
    container: `bg-brand-black py-[35px] opacity-90 absolute top-0 left-0 w-full`,
    content: `flex items-center flex-col gap-5`,
    navmenu: `flex items-center justify-center gap-7`,
    navlink: `text-white`,
    logoImg: `w-[150px]`,
  };
  return (
    //prettier-ignore
    <div className={`${style.container} navbar`}>
      <div className={style.content}>
        <a href="/" className={style.logo}>
          <img className={style.logoImg} src={logo}></img>
        </a>
        <div className={style.navmenu}>
            <a className={style.navlink} href="">HOME</a>
            <a className={style.navlink} href="#about">ABOUT</a>
            <a className={style.navlink} href="#shop">SHOP</a>
            <a className={style.navlink} href="#contact">CONTACT</a>
        </div>
      </div>
    </div>
    //prettier-ignore
  );
};

export default Navbar;
