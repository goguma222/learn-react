import { useEffect, useState } from 'react';
import './App.css';

function Courses() {
  // 1] DOM 조작하기
  // useEffect(() => {
  //   const h2 = document.querySelector('#title');
  //   h2.textContent = 'Data Fetching';
  // }, []);

  // 2] fatch 괄호안에 경로를 적는데 상대경로로 접근하게 되면 public부터 접근한다.
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all'); // all

  useEffect(() => {
    fetch(`data/courses_${filter}.json`)
      .then(res => res.json())
      .then(data => {
        console.log('데이터 조회 성공');
        setList(data);
      });

    // 클린업 함수 써주기
    return () => {
      console.log('연결 해제~!');
    };
  }, [filter]);

  return (
    <>
      <label htmlFor="all">전체</label>
      <input
        type="radio"
        id="all"
        value="all"
        checked={filter === 'all'}
        onChange={e => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        type="radio"
        id="favorite"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default function AppEffect() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Courses />}
    </>
  );
}
