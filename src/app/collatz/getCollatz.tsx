'use client'
import { useState } from 'react';

export default function Collatzform() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(inputValue)
      const response = await fetch('http://127.0.0.1:8000/collatz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num : inputValue }),
      });

      const data = await response.json();
      if (data.error) {
        setResult(data.error);
        throw new Error("에러");
      }
      const biggest : String = data.biggest;
      const times : String = data.times;
      let stringData: string = `최댓값: ${biggest} \n 진행 횟수: ${times}`;
      
      if (times === "error") {
        stringData = '숫자가 너무 큽니다!';
      }

      setResult(stringData);
    } catch (error) {
      console.error('에러: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button type="submit">값 구하기</button>
      </form>
      {result !== null && <p className='result-box'>{result}</p>}
    </div>
  );
}
