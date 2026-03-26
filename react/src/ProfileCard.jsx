function ProfileCard({ image, name, role, desc }) {
  // const { image, name, role, desc } = props;

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      {image && <img src={image} width={200} alt="abc" />}
      {name && <h3>{name}</h3>}
      {role && <p>{role}</p>}
      {desc && <p>{desc}</p>}
    </div>
  );
}

export default ProfileCard;
