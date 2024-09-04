import { useState } from "react";
import "./App.css";
import Intro from "./assets/components/Intro";
import CardsContainer from "./assets/components/cardsContainer";
import AppModal from "./assets/components/Modal";
function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([
    {
      text: "image 1",
      url: "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      text: "image 2",
      url: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      text: "image 3",
      url: "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      text: "image 4",
      url: "https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      text: "image 5",
      url: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      text: "image 6",
      url: "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);
  return (
    <>
      <Intro />
      <div className="cardsContainer flex justify-center items-center flex-wrap gap-4">
        {images.map((data, ind) => {
          return <AppModal key={ind} card={<CardsContainer data={data} />} />;
        })}
      </div>
    </>
  );
}

export default App;
