import { useTodosDespatch } from '../../context/TodoContext';
import { useEffect } from 'react';

export default function TodoItem({ item }) {
  const dispatch = useTodosDespatch();

  // 할일 목록 삭제 함수
  const handleDeleteTodo = deleteId => {
    // 리듀서 적용
    dispatch({
      type: 'deleted',
      deleteId,
    });
  };

  // done 완료 처리 함수
  const handleToggleTodo = (id, done) => {
    // 리듀서 적용
    dispatch({
      type: 'done',
      id,
      done,
    });
  };

  return (
    <label>
      <input
        name={item.id}
        id={item.id}
        type="checkbox"
        checked={item.done}
        onChange={e => handleToggleTodo(item.id, e.target.checked)}
      />
      <label htmlFor={item.id}>
        {item.done ? <del>{item.text}</del> : item.text}
      </label>
      <button onClick={() => handleDeleteTodo(item.id)}>x</button>
    </label>
  );
}
