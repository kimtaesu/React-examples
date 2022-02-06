import { memo } from "react";

interface TodosProps {
  todos: string[];
  addTodo: () => void;
}

let dumpFunc: () => void;
const Todos = ({ todos, addTodo }: TodosProps) => {
  console.log(`child render: ${dumpFunc === addTodo}`);
  dumpFunc = addTodo;
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
