function Link({ to }) {
  const handleClick = (event) => {};
  return (
    <a onClick={handleClick} href={to}>
      Click
    </a>
  );
}

export { Link };
