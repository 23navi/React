export default function Slot({ val1 = "A", val2 = "A", val3 = "A" }) {
  return (
    <>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {val1 == val2 && val2 == val3 ? <h2>Winner</h2> : <h2>Looser</h2>}
      {val1 == val2 && val2 == val3 ? <h2>Congo</h2> : null}
    </>
  );
}
