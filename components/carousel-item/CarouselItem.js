import style from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  return (
    <div
      className={style.carousel}
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to right, #EF6D1C, rgba(117, 19, 93, 0)), url(${props.imageUrl})`,
      }}
    >
      <h1>{props.title}</h1>
      <h4>{props.text}</h4>
      <button>Free Consulting</button>
      <style jsx>{`
        button {
          margin-top: 40px;
          margin-left: 20px;
          border-color: white;
          border-width: 2px;
          background: transparent;
          box-shadow: none;
          padding: 8px 24px;
          border-radius: 6px;
          outline: none;
          letter-spacing: 0.05rem;
          color: white;
        }
        div {
          padding-left: 30px;
          padding-right: 30px;
          color: #ffffff;
        }
        h4 {
          margin-top: 40px;
          margin-left: 20px;
          font-weight: 200;
          font-size: 28px;
        }
        h1 {
          letter-spacing: 0.03em;
          margin-top: 40px;
          margin-left: 20px;
          font-weight: 500;
          text-transform: uppercase;
          font-style: normal;
          font-size: 38px;
          line-height: 42px;
        }
        @media screen and (max-width: 783px) {
          button {
            margin-top: 0;
          }
        }
        @media screen and (max-width: 631px) {
          h4 {
            font-size: 24px;
          }
          button {
            margin-top: 0;
          }
        }
        @media screen and (max-width: 450px) {
          h1 {
            margin-top: 20px;
            margin-left: 10px;
            font-size: 24px;
          }
          h4 {
            margin-top: 20px;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 20px;
          }
          button {
            margin-top: 20px;
            margin-left: 10px;
          }
          div {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselItem;
