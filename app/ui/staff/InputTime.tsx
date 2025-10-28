import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function ResponsiveTimePickers() {
  const now = dayjs().utc();
  const jst = now.tz("Asia/Tokyo");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker defaultValue={dayjs(jst.format("YYYY-MM-DDTHH:mm"))} />
    </LocalizationProvider>
  );
}
