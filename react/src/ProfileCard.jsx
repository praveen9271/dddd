function ProfileCard({ image, name, role, desc }) {
  // const { image, name, role, desc } = props;
  
  return (
    <div style={{border:"1px solid red", padding:"10px", margin:"10px"}}>
      <img src={image} width={200} alt="abc" />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{desc}</p>
    </div>


  );
}

export default ProfileCard;
