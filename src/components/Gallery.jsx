import galleryOne from "../assets/galleryone.webp";
import galleryTwo from "../assets/gallerytwo.webp";
import galleryThree from "../assets/gallerythree.webp";

const Gallery = () => {
  const style = {
    container: `bg-brand-gray py-[100px]`,
    content: `flex justify-center flex-wrap gap-4`,
    img: `rounded-sm w-[35rem] xl:w-[40rem]`,
  };

  return (
    <div className={style.container}>
      <div className={`${style.content} container `}>
        <img className={style.img} src={galleryOne} alt="" />
        <img className={style.img} src={galleryTwo} alt="" />
        <img className={style.img} src={galleryThree} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
