import ImageShow from "./ImageShow";
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <>
      <h3>Image List</h3>
      {renderedImages}
    </>
  );
}

export default ImageList;
