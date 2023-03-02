import playBtn from "../assets/play.png";

const History = () => {
  const style = {
    container: `h-[65rem] w-full relative py-[5rem]`,
    content: `h-full w-full flex  flex-col`,
    title: `text-brand-yellow text-5xl`,
    text: `text-brand-white text-center mt-5`,
    playBtn: `relative top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-40%] w-[10rem]`,
    header: `text-center max-w-[80rem] mx-auto relative w-[90%]`,
  };

  return (
    <div className={`${style.container} history`}>
      <div className={style.content}>
        <div className={style.header}>
          <h2 className={style.title}>OUR HISTORY</h2>
          <p className={style.text}>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop .
          </p>
        </div>
        <img className={style.playBtn} src={playBtn} alt="Video play button" />
      </div>
    </div>
  );
};

export default History;
