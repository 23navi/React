// import Greet from "./Greet";
// import Slot from "./Slot";
import "./App.css";

// import PropertyList from "./PropertyList";

// import Toggler from "./Toggler";
import ColorGrid from "./ColorGrid";

// function App() {
//   // return <Greet name="Navii" />;
//   // return <Slot val1="A" val2="B" val3="C" />;
//   // return <Slot val1="🍒" val2="🍒" val3="🍒" />;
//   return <Slot />;
// }

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

// function App() {
//   return <PropertyList properties={properties} />;
// }

function App() {
  return <ColorGrid colorList={["#FF0000", "#00FF00", "#0000FF"]} />;
}

export default App;
