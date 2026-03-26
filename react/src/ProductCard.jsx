function ProductCard({ title, price, image }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {title && <h3>{title}</h3>}
      {price && <p>{price}</p>}
      {image && <img src={image} width={200} alt="abc" />}
    </div>
  );
}

export default ProductCard;
