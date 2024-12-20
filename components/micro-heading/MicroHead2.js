const MicroHead2 = (props) => {
  return (
    <div style={{ ...props.style, display: "inline-block" }}>
      <h3>{props.title}</h3>
      <style jsx>
        {`
          h3 {
            margin: 0;
            color: #FFFFF;
            font-weight: 300;
            font-size: 26px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default MicroHead2;
