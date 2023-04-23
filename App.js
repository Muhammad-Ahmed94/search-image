import apiSearchImages from "./Api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";

const App = () => {
  const[images, setImage] = useState([]);

  const handleSubmit = async(term) => {
    const result = await apiSearchImages(term);
    setImage(result);
  };

  return (
    <div>
      <div className="main-heading" style={{
        fontSize: 50,
        marginLeft: 390,
        marginBottom: 10
      }}>
        <div>
          1. Imagios_________2. Splash Screen
        </div>
      Image Search SPA Using Unsplash API
      </div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}
 
export default App;