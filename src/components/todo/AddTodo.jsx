import { useState } from "react";
import { useTodos, useTodosDespatch } from "../../context/TodoContext";

export default function AddTodo({ onAddTodo }) {

    const [todoText, setTodoText] = useState("");

    const todos = useTodos();
    const dispatch = useTodosDespatch();

    // 추가 함수 added
    const handleAddTodo = (text) => {
        if (text.trim() === '') return; // 빈 문자열 추가 방지

        // dispatch 이러한 객체는 action 객체라고 한다.
        dispatch({
            type: 'added',
            nextId: todos.length,
            todoText: text
        })
    };

    return (
        <div>
            <input
                type="text"
                value={todoText}
                onKeyPress={(e) => {
                    // 엔터로 할일 목록 추가 함수
                    if (e.key === 'Enter') {
                        e.preventDefault(); // 기본 동작 방지
                        handleAddTodo(e.target.value);
                        setTodoText('');
                    }    
                }}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={() => {
                // 저장
                setTodoText('');
                handleAddTodo(todoText);
            }}>추가</button>
        </div>
    );
}
