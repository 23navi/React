export default function Header({ image, children }) {
  return (
    <header>
      <img src={image} alt="Medal badge with a star" />
      {children}
    </header>
  );
}
