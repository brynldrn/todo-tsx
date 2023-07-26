import { Link } from "react-router-dom";

export default function Todo() {
  const params = new URLSearchParams();
  const id = params.get('id')

  return (
    <section>
      <Link to="/">⬅️ Back</Link>
      <div>
        <span>{id}</span>
      </div>
    </section>
  )
}