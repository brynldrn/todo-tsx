import { ChangeEvent, useCallback, useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import useTodos from "./hooks/useTodos"
import { Todo } from "./types/Todo";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { data, loading, error } = useTodos();
  const [displayed, setDisplayed] = useState<Todo[]>([])

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchTerm(value)
  }, [])

  useEffect(() => {
    // add debounce here if filtering is via API request
    setDisplayed(data?.filter((todo) => searchTerm ? todo.title.toLowerCase().includes(searchTerm.toLowerCase()) : true) || [])
  }, [searchTerm, data])

  return (
    <section className="flex gap-5 w-4/5 md:w-[520px] mx-auto flex-wrap my-10">
      {error && (
        <span className="text-red-500">Error getting data from API! Please reload page.</span>
      )}
      {loading && (
        <span>Loading content...</span>
      )}
      {!error && !loading && data && (
        <div>
          <span>Searh by title: </span>
          <input type="search" name="search" id="search" value={searchTerm} onChange={onSearch} className="border border-zinc-600 p-2 rounded-sm outline-none" />
        </div>
      )}
      {displayed?.map(({ completed, id, title, userId }) => <TodoItem key={id} completed={completed} id={id} userId={userId} title={title} />)}
    </section>
  )
}

export default App
