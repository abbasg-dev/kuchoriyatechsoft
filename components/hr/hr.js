const ColoredLine = ({ color }) => (
    <hr
        style={{
            marginTop:60,
            marginBottom:60,
            color: color,
            backgroundColor: color,
            height: 2,
            width:"70%"
        }}
    />
);

export default ColoredLine;