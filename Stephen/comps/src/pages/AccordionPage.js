import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    { key: "132424", label: "First", content: "First Content" },
    { key: "1332948", label: "Second", content: "Second Content" },
    { key: "12304723", label: "Third", content: "Third Content" },
    { key: "1293742", label: "Forth", content: "Forth Content" },
  ];
  return (
    <div className="Accordion">
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
