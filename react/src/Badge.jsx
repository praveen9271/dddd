function Badge(props) {
  return (
    <span
      style={{
        backgroundColor: props.color,
        color: "white",
        padding: "5px",
        margin: "5px",
      }}
    >
    {props.text}
    </span>
  );
}

export default Badge;