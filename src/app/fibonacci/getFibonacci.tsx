'use client'
import { useState } from 'react';

export default function FibonacciForm() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(inputValue)
      const response = await fetch('http://127.0.0.1:8000/fibonacci', {
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
      const fibonacciData = data.result;
      let stringData: string = "\n";

      for (let i = 0; i < fibonacciData.length; i++) {
          stringData += [i] + " : ";
          stringData += fibonacciData[i];
          if (i < fibonacciData.length - 1) {
              stringData += ",\n";
          }
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
          max={93}
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button type="submit">값 구하기</button>
      </form>
      {result !== null && <p className='result-box'>결과: {result}</p>}
    </div>
  );
}
