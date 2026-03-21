function InfoCard(props) {
  return (
    <div style={{border:"1px solid green", padding:"10px", margin:"10px"}}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default InfoCard;