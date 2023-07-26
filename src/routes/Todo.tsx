import { Link } from "react-router-dom";

export default function Todo() {
  const params = new URLSearchParams();
  const id = params.get('id')

  return (
    <section className="w-4/5 md:w-[520px] mx-auto my-10">
      <Link to="/">⬅️ Back</Link>
      <div>
        <span>{id}</span>
      </div>
    </section>
  )
}