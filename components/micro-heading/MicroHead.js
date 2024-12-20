const MicroHead = (props) => {
  return (
    <div id={props.id} style={props.style}>
      <h3>{props.title}</h3>
      <style jsx>
        {`
          h3 {
            text-transform: uppercase;
            color: #fd7e14;
            font-weight: bold;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default MicroHead;
