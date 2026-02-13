// 時間と分を分解して勤務時間を計算
export function CalcWorkTime(
  jobstart: string,
  jobend: string,
): [number, number, string] {
  const [startHour, startMin] = jobstart.split(":").map(Number);
  const [endHour, endMin] = jobend.split(":").map(Number);
  const hours = Math.floor(endHour + endMin / 60 - (startHour + startMin / 60));
  const minutes =
    (endHour + endMin / 60 - (startHour + startMin / 60) - hours) * 60;
  const hoursString = `${hours}:${minutes.toString().padStart(2, "0")}`;

  return [hours, minutes, hoursString];
}
