'use client'
import { useState } from 'react';

export default function PrimeForm() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(inputValue)
      const response = await fetch('http://127.0.0.1:8000/prime', {
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
      const primeCount = data.count;
      const primeFactors = data.factors;
      let stringData: string = `소인수 개수: ${primeCount}, \n`;

      for (let i = 0; i < primeFactors.length; i++) {
          stringData += [i] + " : ";
          stringData += primeFactors[i];
          if (i < primeFactors.length - 1) {
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
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button type="submit">값 구하기</button>
      </form>
      {result !== null && <p className='result-box'>{result}</p>}
    </div>
  );
}
