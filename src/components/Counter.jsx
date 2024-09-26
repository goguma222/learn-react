import { useState } from 'react';

export default function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  console.log(`counter : ${counter}`);

  const handleCounter = () => {
    setCounter(c => c + 1);
    setCounter(c => c + 1);
    setCounter(c => c + 1);

    if (onTotal) {
      // onTotal이 비어있지 않을 때만 실행시키는 조건문
      onTotal();
    }
  };

  return <button onClick={handleCounter}>Counter : {counter}</button>;
}
