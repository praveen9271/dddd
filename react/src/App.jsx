import ProfileCard from "./ProfileCard.jsx";
import ProductCard from "./ProductCard.jsx";
import QuoteCard from "./QuoteCard.jsx";
import Badge from "./Badge.jsx";
import InfoCard from "./InfoCard.jsx";

function App() {
  return (
    <div>
      <h2>Profile Cards</h2>

      <ProfileCard
        name="Praveen"
        role="Student"
        desc="Starting React"
        image="https://www.goodfreephotos.com/albums/other-landscapes/mountains-and-pond-landscape-with-majestic-scenery.jpg"
      />

      <ProfileCard
        name="Manish"
        role="Student"
        desc="Learnig React"
        image="https://www.eventstodayz.com/wp-content/uploads/2017/01/beautiful-scenery-hd-wallpaper.jpg"
      />

      <h2>Product Card</h2>
      <ProductCard
        title="Tractor"
        price="6,00,000"
        image="https://tse2.mm.bing.net/th/id/OIP.gSNiVFiJWXaBvguQOT6pFwHaGD?pid=Api&P=0&h=180"
      />

      <ProductCard
        title="Trucks"
        price="25,00,000"
        image="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Semi-Truck-Images.jpg"
      />

      <h2>Quotes</h2>
      <QuoteCard quote="HELLO WORLD" author="developers" />
      <QuoteCard quote="HELLO REACT" author="Someone" />

      <h2>Badges</h2>
      <Badge text="Buy" color="red" />
      <Badge text="Sell" color="green" />

      <h2>Info Cards</h2>
      <InfoCard title="React" desc="JavaScript Library" />
      <InfoCard title="MERN" desc="Mongo Express React Node" />
    
    </div>
  );
}

export default App;
