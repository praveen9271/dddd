function InfoCard(props) {
  const{title,desc}=props
  console.log("props", props);
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      {title && <h3>{title}</h3>}
      {desc && <p>{desc}</p>}
    </div>
  );
}

export default InfoCard;
