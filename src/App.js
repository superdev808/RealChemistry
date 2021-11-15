import { useState, useEffect } from "react";
import { loadImagesFromWiki } from "./api";
import WikiImage from "./WikiImage";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const loadImagesWithTitle = async () => {
    const response = await loadImagesFromWiki({ titles: "New Jersey" });

    if (response && response.query) {
      setImages(Object.values(response.query.pages));
    }
  };

  useEffect(() => {
    loadImagesWithTitle();
  }, []);

  return (
    <div className="image-list">
      {images.length ? (
        images.map((image, index) => <WikiImage key={index} {...image} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
