import ImageSlider from "./ImageSlider/index";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/1.jpg", title: "beach" },
    { url: "http://localhost:3000/2.jpg", title: "boat" },
    { url: "http://localhost:3000/3.jpg", title: "forest" },
    { url: "http://localhost:3000/4.jpg", title: "city" },
    { url: "http://localhost:3000/5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;