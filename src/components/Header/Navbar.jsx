import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    container: `bg-brand-black py-[35px] opacity-90 absolute top-0 left-0 w-full`,
    content: `flex items-center flex-col gap-5`,
    navmenu: `flex items-center justify-center gap-7`,
    navlink: `text-white smMax:text-[1.6rem] cursor-pointer`,
    logoImg: `w-[150px]`,
  };
  return (
    //prettier-ignore
    <div className={`${style.container} ${isFixed ? 'navbar--fixed' : 'navbar'}`} >
      <div className={style.content}>
        <a href="/" className={`${style.logo}`}>
          <img className={style.logoImg} src={logo}></img>
        </a>
        <div className={style.navmenu}>
            <Link spy={true} smooth={true} offset={-50} duration={600}  className={style.navlink} to="home">HOME</Link>
            <Link spy={true} smooth={true} offset={-50} duration={600}  className={style.navlink} to="about">ABOUT</Link>
            <Link spy={true} smooth={true} offset={-50} duration={600}  className={style.navlink} to="shop">SHOP</Link>
            <Link spy={true} smooth={true} offset={-50} duration={600}  className={style.navlink} to="contact">CONTACT</Link>
        </div>
      </div>
    </div>
    //prettier-ignore
  );
};

export default Navbar;
