function Link({ to }) {
  const handleClick = (event) => {
    console.log(window.location.pathname);
  };
  return (
    <a onClick={handleClick} href={to}>
      Click
    </a>
  );
}

export { Link };
