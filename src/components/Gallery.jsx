import gallery1 from "../assets/gallery-1.webp";
import gallery2 from "../assets/gallery-2.webp";
import gallery3 from "../assets/gallery-3.webp";

const Gallery = () => {
  const style = {
    container: `bg-brand-gray py-[70px]`,
    content: `flex justify-center flex-wrap gap-4`,
    img: `rounded-sm w-[35rem] xl:w-[40rem]`,
  };

  return (
    <div className={style.container}>
      <div className={`${style.content} container `}>
        <img className={style.img} src={gallery1} alt="" />
        <img className={style.img} src={gallery2} alt="" />
        <img className={style.img} src={gallery3} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
