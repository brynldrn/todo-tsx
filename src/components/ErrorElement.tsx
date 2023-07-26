import { Link } from "react-router-dom";

export default function ErrorElement() {
  return (
    <section className="w-4/5 md:w-[520px] mx-auto my-10">
      <Link className="block" to="/">⬅️ Back Home</Link>
      <div className="flex flex-col items-center justify-center">
        <span className="text-9xl block">404</span>
        <span>Not Found!</span>
      </div>
    </section>
  )
}