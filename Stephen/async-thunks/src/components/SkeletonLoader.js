import className from "classnames";

function SkeletonLoader({ times }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i}>
          <p className="decoration-white">hello</p>
        </div>
      );
    });
  console.log(boxes);
  return <div>{boxes}</div>;
}

export default SkeletonLoader;
