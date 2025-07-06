
import { useEffect, useState } from 'react';
import { calculateSurebet } from '../utils/calculator';

export default function Home() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('/api/odds')
      .then(res => res.json())
      .then(data => {
        setData(data);
        const { odds1, odds2 } = data[0];
        const calc = calculateSurebet(odds1, odds2);
        setResult(calc);
      });
  }, []);

  return (
    <div style={{ padding: 20, backgroundColor: '#0f172a', color: 'white' }}>
      <h1>1xBet vs BajiLive Surebet</h1>
      {data.map((match, idx) => (
        <div key={idx}>
          <p>{match.match}</p>
          <p>1xBet Odds: {match.odds1}</p>
          <p>BajiLive Odds: {match.odds2}</p>
        </div>
      ))}
      {result ? (
        <>
          <p>Bet on 1xBet: ৳{result.s1.toFixed(2)}</p>
          <p>Bet on BajiLive: ৳{result.s2.toFixed(2)}</p>
          <p>Profit: ৳{result.profit.toFixed(2)} ({result.profitPercent.toFixed(2)}%)</p>
        </>
      ) : (
        <p>No surebet found.</p>
      )}
    </div>
  );
}
