import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const style = {
    container: `bg-brand-black py-[35px] opacity-90`,
    content: `flex items-center flex-col gap-5`,
    navmenu: `flex items-center justify-center gap-7`,
    navlink: `text-white`,
    logoImg: `w-[150px]`,
  };
  return (
    //prettier-ignore
    <div className={`${style.container} navbar`}>
      <div className={style.content}>
        <Link to="/" className={style.logo}>
          <img className={style.logoImg} src={logo}></img>
        </Link>
        <div className={style.navmenu}>
            <Link className={style.navlink} to="/">HOME</Link>
            <Link className={style.navlink} to="#about">ABOUT</Link>
            <Link className={style.navlink} to="#shop">SHOP</Link>
            <Link className={style.navlink} to="#contact">CONTACT</Link>
        </div>
      </div>
    </div>
    //prettier-ignore
  );
};

export default Navbar;
