import { useRef, useState } from "preact/hooks";
import { TodoType } from "../types/Todo.ts";
import Todo from "../components/Todo.tsx";

export default function Todos() {
  const [counter, setCounter] = useState<number>(0);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onNewTodo = (event: Event) => {
    event.preventDefault();

    if (inputRef.current?.value) {
      const newTodo: TodoType = {
        id: counter,
        title: inputRef.current.value,
      };

      setTodos((prevState) => [...prevState, newTodo]);
      setCounter((prevState) => prevState + 1);
      inputRef.current.value = "";
    }
  };

  const onRemoveTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id != id));
  };

  const onEditTodo = (todo: TodoType) => {
    setTodos((prevState) =>
      prevState.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      })
    );
  };

  return (
    <>
      <div class="mt-10 mx-auto max-w-sm w-full">
        <form onSubmit={onNewTodo}>
          <input
            id="todo"
            name="todo"
            type="text"
            ref={inputRef}
            placeholder="Enter new Todo..."
            required
            class="w-full rounded-md  py-1.5 px-3.5  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
          />
        </form>
      </div>
      {todos.length > 0
        ? (
          <div class="mt-10">
            {todos.map((todo) => (
              <Todo
                todo={todo}
                onTodoEdit={onEditTodo}
                onTodoRemove={onRemoveTodo}
              />
            ))}
          </div>
        )
        : (
          <div class="mt-10 text-center">
            <div>
              <h2 class="text-2xl font-bold mb-5">All tasks are Completed!</h2>
              <p>Go have fun outside!</p>
            </div>
          </div>
        )}
    </>
  );
}
