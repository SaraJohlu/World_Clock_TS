import { useState, useEffect } from "react";
import "../Styles/HomeCitiesStyle.css";

const images = ["stockholm.jpg", "new-york.jpg", "london.jpg"];

//function with useSatet and useEffect that will Shuffle images in array evey 4 seconds.
//After it has shuffled every img in array it will clean up and start over.
// heroheader is a function that together with css will lay the pictures of this array on shuffel behind the World clock text and p tag.
export const HeaderImgShuffle: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="heroHeader">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="slideshow of city pictures"
          className={index === currentImg ? "active" : ""}
        />
      ))}
      <section className="headerText">
        <h1>World Clock</h1>
        <p>Everyone Has Their Own Timezone</p>
      </section>
    </section>
  );
};
