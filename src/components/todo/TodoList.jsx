import TodoItem from "./TodoItem";
import { useTodos } from "../../context/TodoContext";
import { useMemo, useState } from "react";

export default function TodoList() {
  const todos = useTodos();

  const [isDone, setIsDone] = useState(false);

  const getFilteredTods = () => {
    if(!isDone) {
      return todos;
    }
    return todos.filter((todo) => todo.done);
  }
  const filteredTodos = getFilteredTods();

  // 카운트 함수
  const getStatsCount = () => {
    console.log('getStatsCount 함수 실행');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    return {
      totalCount,
      doneCount
    }
  }
  // getStatsCount 함수에서 반환하는 값을 useMemo에서 그대로 반환한다.
  const { totalCount, doneCount } = useMemo(() => getStatsCount(), [todos]);

  return (
    <>
      <div>
        <input type="checkbox" name="isDone" id="isDone" checked={isDone} onChange={(e) => setIsDone(e.target.checked)} />
        <label htmlFor="isDone">완료된 항목 보기({doneCount}/{totalCount})</label>
      </div>
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
