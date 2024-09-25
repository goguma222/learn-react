// import { useReducer, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'; 
// import { type } from '@testing-library/user-event/dist/type';
// import { TodoContext } from './context/TodoContext'; 
// import { TodoDispatchContext } from './context/TodoContext';
// TodoContext :  todos의 상태를 관리
// todoDispatchContext : dispatch의 상태를 관리
// import './App.css';
import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo';
import { TodoProvider } from './context/TodoContext';

function AppTodo() {

    return (
        <TodoProvider>
            <h2>할일목록</h2>
            <AddTodo />
            <TodoList />
        </TodoProvider>
    )
}

export default AppTodo;