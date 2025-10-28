import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function ResponsiveTimePickers() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const now = dayjs().utc();
  const jst = now.tz("Asia/Tokyo");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "TimePicker",
          "MobileTimePicker",
          "DesktopTimePicker",
          "StaticTimePicker",
        ]}
      >
        <MobileTimePicker
          defaultValue={dayjs(jst.format("YYYY-MM-DDTHH:mm"))}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
