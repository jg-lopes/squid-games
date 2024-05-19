import './App.css'

type Image = {
  src: string;
  caption: string;
};

function generateImages(count: number): Image[] {
  const images: Image[] = [];
  for (let i = 1; i <= count; i++) {
    const image: Image = {
      src: `https://picsum.photos/id/${i}/200/200`,
      caption: `Image ${i}`
    };
    images.push(image);
  }
  return images;
}

function ImageGrid({ images }: { images: Image[] }) {
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
  const images = generateImages(5);

  return (
    <div className="App">
      <h1>Image Grid</h1>
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
