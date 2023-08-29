import ConceptCard from "./ConceptCard";

export default function ConceptsList({ concepts }) {
  const renderConcepts = concepts.map((concept) => {
    return <ConceptCard concept={concept} key={concept.title}></ConceptCard>;
  });
  return <ul id="concepts">{renderConcepts}</ul>;
}
