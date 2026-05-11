import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';

import './Gallery.css';

function Gallery() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Memory Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <div className="image-container">
              <img
                src={img}
                alt={`Doraemon memory ${i + 1}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;