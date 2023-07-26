import { Link, useLocation } from "react-router-dom";
import useUser from "../hooks/useUserById";
import { useTodoById } from "../hooks/useTodos";

export default function TodoRoute() {
  const location = useLocation();
  const state = location.state as {
    userId: number,
    id: number
  }
  const { data: userData, loading: userLoading, error: userError } = useUser(state?.userId);
  const { data: todoData, loading: todoLoading, error: todoError } = useTodoById(state?.id);

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
          {userLoading && (
            <span>Fetching user info...</span>
          )}
          {userError && (
            <span>Failed to get user info...</span>
          )}
          {userData && (
            <span>{userData?.name}</span>
          )}
        </p>
        <p>
          <span className="font-bold">Title: </span>
          {todoLoading && (
            <span>Fetching todo data...</span>
          )}
          {todoError && (
            <span>Failed to get todo data...</span>
          )}
          {todoData && (
            <span>{todoData?.title}</span>
          )}
        </p>
      </div>
    </section>
  )
}