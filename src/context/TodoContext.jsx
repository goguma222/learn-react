import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';
import todoReducer from '../reducer/todo-reducer';

export const TodoContext = createContext(null); // todos 초기값
export const TodoDispatchContext = createContext(null); // dispatch 함수 관리 초기값

export function TodoProvider({ children }) {
  const initialList = [
    { id: 0, text: 'HTML, CSS 공부하기', done: false },
    { id: 1, text: 'JAVASCRIPT 공부하기', done: false },
  ];

  const [todos, dispatch] = useImmerReducer(todoReducer, initialList); // TodoDispatchContext.Provider에 value 넘김

  return (
    <TodoContext.Provider value={todos}>
      {' '}
      {/* value안에 todos 언제든지 사용할 수 있다. */}
      <TodoDispatchContext.Provider value={dispatch}>
        {' '}
        {/* value안에 dispatch함수를 언제든지 사용할 수 있다. */}
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext); // todos 반환함
}

export function useTodosDespatch() {
  return useContext(TodoDispatchContext); // dispatch 반환함
}
