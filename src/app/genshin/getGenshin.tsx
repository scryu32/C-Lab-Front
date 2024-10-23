'use client';
import { useState } from 'react';
import "./genshin.css"

export default function GenshinForm() {
  const [characterName, setCharacterName] = useState<string>('');
  const [gachaCount, setGachaCount] = useState<number | null>(null);
  const [constellation, setConstellation] = useState<number | null>(null);
  const [simulationCount, setSimulationCount] = useState<number | null>(null);
  const [result, setResult] = useState<any>(null);
  const [result2, setResult2] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/genshin/character', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          character: characterName,
          ticket: gachaCount,
          constellation: constellation,
          simTimes: simulationCount,
        }),
      });

      const data = await response.json();
      if (data.error) {
        setResult(data.error);
        throw new Error("에러");
      }
      
      setResult(data.result);
      setResult2(data.Sangwi);
    } catch (error) {
      console.error('에러: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="캐릭터 이름"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <input
          type="number"
          placeholder="뽑기 횟수"
          value={gachaCount === null ? '' : gachaCount}
          onChange={(e) => setGachaCount(Number(e.target.value))}
          min="1"
        />
        <input
          type="number"
          placeholder="돌파 횟수 (0-6)"
          value={constellation === null ? '' : constellation}
          onChange={(e) => setConstellation(Number(e.target.value))}
          min="0"
          max="6"
        />
        <input
          type="number"
          placeholder="시뮬레이션 횟수 (최대 100만)"
          value={simulationCount === null ? '' : simulationCount}
          onChange={(e) => setSimulationCount(Number(e.target.value))}
          min="1"
          max="1000000"
        />
        <button type="submit">값 구하기</button>
      </form>

      {result && (
        <div className='Genshin-container'>
          <h4>상위 {result2}%</h4>
          <h4>제일 운 좋은 경우</h4>
          {Object.entries(result).map(([key, value]: [string, any]) => (
            <div key={key}>
              <p>캐릭터: {value.Character}</p>
              <p>뽑기 횟수: {value.Times}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
