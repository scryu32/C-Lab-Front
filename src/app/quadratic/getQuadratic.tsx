'use client'
import { useState } from 'react';
import "./quadratic.css"

export default function QuadraticForm() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/quadratic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "a": a, "b": b, "c": c }),
      });

      const data = await response.json();
      if (data.error) {
        setResult(data.error);
        throw new Error("에러");
      }
      const roots = data.result;

      setResult(`${roots}`);
    } catch (error) {
      console.error('에러: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='quadratic-form'>
        <input
          type="number"
          placeholder="a"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
        <p>x^2 + </p>
        <input
          type="number"
          placeholder="b"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
        <p>x + </p>
        <input
          type="number"
          placeholder="c"
          value={c}
          onChange={(e) => setC(Number(e.target.value))}
        />
        <button type="submit">해 구하기</button>
      </form>
      {result !== null && <p className='result-box'>결과: {result}</p>}
    </div>
  );
}
