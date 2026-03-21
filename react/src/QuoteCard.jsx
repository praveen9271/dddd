function QuoteCard({quote,author}) 

{
  return (
    <div style={{border:"2px solid orange", padding:"10px", margin:"10px"}}>
      <h2>{quote}</h2>
      <h4> {author}</h4>
    </div>
  );
}

export default QuoteCard;
