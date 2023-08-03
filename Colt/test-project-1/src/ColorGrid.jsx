import ColorBox from "./ColorBox";
export default function ColorGrid({ colorList }) {
  return (
    <div className="color-grid">
      {colorList.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </div>
  );
}
