import { Link, useLocation } from "react-router-dom";
import { Todo } from "../types/Todo";
import useUser from "../hooks/useUserById";

export default function TodoRoute() {
  const location = useLocation();
  const state = location.state as Todo;
  const { data, loading, error } = useUser(state?.userId);

  return (
    <section className="w-4/5 md:w-[520px] mx-auto my-10">
      <Link to="/">⬅️ Back</Link>
      <div>
        <p>
          <span className="font-bold">Item #: </span>
          <span>{state?.id}</span>
        </p>
        <p>
          <span className="font-bold">Creator: </span>
          {loading && (
            <span>Fetching user info...</span>
          )}
          {error && (
            <span>Failed to get user info...</span>
          )}
          {data && (
            <span>{data?.name}</span>
          )}
        </p>
        <p>
          <span className="font-bold">Title: </span>
          <span>{state?.title}</span>
        </p>
      </div>
    </section>
  )
}