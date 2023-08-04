import "./css/ImageList.css";
import ImageShow from "./ImageShow";
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <div className="image-list">
      <h3>Image List</h3>
      {renderedImages}
    </div>
  );
}

export default ImageList;
