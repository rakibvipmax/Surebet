
export function calculateSurebet(odds1, odds2, stake = 10000) {
  const p1 = 1 / odds1;
  const p2 = 1 / odds2;
  const total = p1 + p2;
  if (total >= 1) return null;
  const s1 = (stake * p1) / total;
  const s2 = (stake * p2) / total;
  const payout = s1 * odds1;
  const profit = payout - stake;
  const profitPercent = (profit / stake) * 100;
  return { s1, s2, profit, profitPercent };
}
