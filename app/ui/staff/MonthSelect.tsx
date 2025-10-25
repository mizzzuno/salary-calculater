// dynamic importでSSRを無効化して使用する

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export default function DatePickerViews() {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2025-11"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={'"month" and "year"'}
          views={["month", "year"]}
          minDate={dayjs("2025-09")}
          maxDate={dayjs("2025-12")}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{ width: 150 }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
