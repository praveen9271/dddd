import ProfileCard from "./ProfileCard.jsx";
import ProductCard from "./ProductCard.jsx";
import QuoteCard from "./QuoteCard.jsx";
import Badge from "./Badge.jsx";
import InfoCard from "./InfoCard.jsx";
import { profiles, products, quotes, badges, infos } from "./constant.js";

function App() {
  return (
    <div>
      <h2>Profile Cards</h2>
      {profiles.length > 0 &&
        profiles.map((item) => {
          return (
            <ProfileCard
              key={item.id}
              name={item.name}
              role={item.role}
              desc={item.desc}
              image={item.image}
            />
          );
        })}

      <h2>Product Cards</h2>
      {products.length > 0 &&
        products.map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          );
        })}

      <h2>Quotes</h2>
      {quotes.length > 0 &&
        quotes.map((item) => {
          return (
            <QuoteCard key={item.id} quote={item.quote} author={item.author} />
          );
        })}

      <h2>Badges</h2>

      {badges.length > 0 &&
        badges.map((item) => {
          return <Badge key={item.id} text={item.text} color={item.color} />;
        })}

      <h2>Info Cards</h2>
      {infos.length > 0 &&
        infos.map((item) => {
          return <InfoCard key={item.id} title={item.title} desc={item.desc} />;
        })}
    </div>
  );
}

export default App;
