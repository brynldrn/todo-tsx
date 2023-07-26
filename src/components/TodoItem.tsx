import { Link } from "react-router-dom";
import { Todo } from "../types/Todo";


export default function TodoItem({ completed, id, title, userId }: Todo) {
  return (
    <Link
      to={`todo/${id}`}
      className={`w-full md:w-[250px] flex flex-col gap-4 items-center justify-center ${completed ? 'bg-green-400' : 'bg-red-400'} border border-gray-600 p-5 overflow-hidden`} 
      data-user-id={userId}
    >
      <span>{`#${id}`}</span>
      <span {...(title.length > 20 && {
        title
      })}>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</span>
    </Link>
  )
}
