function Accordion({ items }) {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.key}>
        <p>{item.label }</p>
        <p>{item.content}</p>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
