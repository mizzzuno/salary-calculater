// 時間と分を分解して勤務時間を計算
export function CalcWorkTime(jobstart: string, jobend: string): string {
  const [startHour, startMin] = jobstart.split(":").map(Number);
  const [endHour, endMin] = jobend.split(":").map(Number);
  const startTotalMin = startHour * 60 + startMin;
  const endTotalMin = endHour * 60 + endMin;

  const diffMin = endTotalMin - startTotalMin;

  const hours = Math.floor(diffMin / 60);
  const minutes = diffMin % 60;

  const hoursString = `${hours}:${minutes.toString().padStart(2, "0")}`;

  return hoursString;
}
