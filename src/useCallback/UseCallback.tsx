import React, { useCallback, useState } from "react";
import Todos from "./Todos";

type Props = {};

function UseCallback({}: Props) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount(c => c + 1);
  };
  // const addTodo = () => {
  //   setTodos(t => [...t, "New Todo"]);
  // };

  // Solution
  const addTodo = useCallback(() => {
    setTodos(t => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default UseCallback;
