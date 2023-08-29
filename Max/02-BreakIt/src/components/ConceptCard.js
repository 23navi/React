export default function ConceptCard({ concept, key }) {
  return (
    <li key={key} className="concept">
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </li>
  );
}
