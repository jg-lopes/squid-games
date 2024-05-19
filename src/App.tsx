import './App.css'

function generateImages(count: number) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    const image = {
      src: `https://picsum.photos/id/${i}/200/200`,
      caption: `Image ${i}`
    };
    images.push(image);
  }
  return images;
}

function ImageGrid({ images }: { images: { src: string; caption: string }[] }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.caption} />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const images = generateImages(25);

  return (
    <div className="App">
      <h1>Image Grid</h1>
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
