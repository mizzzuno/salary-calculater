import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowModel,
  GridRenderEditCellParams,
  useGridApiContext,
  GridColTypeDef,
  GridCellEditStopReasons,
} from "@mui/x-data-grid";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import { randomInt } from "@mui/x-data-grid-generator";

function isKeyboardEvent(event: any): event is React.KeyboardEvent {
  return !!event.key;
}

function EditTextarea(props: GridRenderEditCellParams<any, string>) {
  const { id, field, value, colDef, hasFocus } = props;
  const [valueState, setValueState] = React.useState(value);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>();
  const [inputRef, setInputRef] = React.useState<HTMLInputElement | null>(null);
  const apiRef = useGridApiContext();

  React.useLayoutEffect(() => {
    if (hasFocus && inputRef) {
      inputRef.focus();
    }
  }, [hasFocus, inputRef]);

  const handleRef = React.useCallback((el: HTMLElement | null) => {
    setAnchorEl(el);
  }, []);

  const handleChange = React.useCallback<
    NonNullable<InputBaseProps["onChange"]>
  >(
    (event) => {
      const newValue = event.target.value;
      setValueState(newValue);
      apiRef.current.setEditCellValue(
        { id, field, value: newValue, debounceMs: 200 },
        event
      );
    },
    [apiRef, field, id]
  );

  return (
    <div style={{ position: "relative", alignSelf: "flex-start" }}>
      <div
        ref={handleRef}
        style={{
          height: 1,
          width: colDef.computedWidth,
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
      {anchorEl && (
        <Popper open anchorEl={anchorEl} placement="bottom-start">
          <Paper elevation={1} sx={{ p: 1, minWidth: colDef.computedWidth }}>
            <InputBase
              multiline
              rows={4}
              value={valueState}
              sx={{ textarea: { resize: "both" }, width: "100%" }}
              onChange={handleChange}
              inputRef={(ref) => setInputRef(ref)}
            />
          </Paper>
        </Popper>
      )}
    </div>
  );
}

const multilineColumn: GridColTypeDef = {
  type: "string",
  renderEditCell: (params) => <EditTextarea {...params} />,
};

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "日付",
    align: "center",
    headerAlign: "center",
    type: "string",
  },
  {
    field: "jobstart",
    headerName: "開始",
    type: "string",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "jobend",
    headerName: "終了",
    type: "string",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "hours",
    headerName: "時間",
    editable: true,
    type: "string",
    align: "center",
    headerAlign: "center",
    ...multilineColumn,
  },
  {
    field: "salary",
    headerName: "給料",
    editable: true,
    align: "center",
    headerAlign: "center",
    ...multilineColumn,
  },
];

function randomTime(startHour: number, endHour: number) {
  const hour = randomInt(startHour, endHour);
  const minute = randomInt(0, 1) === 0 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${minute}`;
}

const rows: GridRowModel[] = [];

for (let i = 0; i < 50; i += 1) {
  const jobstart = randomTime(9, 17);
  const jobend = randomTime(17, 23);

  // 時間と分を分解して勤務時間を計算
  const [startHour, startMin] = jobstart.split(":").map(Number);
  const [endHour, endMin] = jobend.split(":").map(Number);
  const hours = Math.floor(endHour + endMin / 60 - (startHour + startMin / 60));
  const minutes = (endHour + endMin / 60 - (startHour + startMin / 60) - hours) * 60;
  const hoursString = `${hours}:${minutes.toString().padStart(2, "0")}`;

  rows.push({
    date: getDateWithWeekday(i),
    jobstart,
    jobend,
    hours: hoursString,
    salary: randomInt(30000, 60000),
  });
}

export default function MultilineEditing() {
  return (
    <div style={{ height: 600, width: "100vw" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.date} // 追加
        onCellEditStop={(params, event) => {
          if (params.reason !== GridCellEditStopReasons.enterKeyDown) {
            return;
          }
          if (isKeyboardEvent(event) && !event.ctrlKey && !event.metaKey) {
            event.defaultMuiPrevented = true;
          }
        }}
      />
    </div>
  );
}

function getDateWithWeekday(offset: number) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  const d = date.getDate().toString().padStart(2, "0");
  const week = ["日", "月", "火", "水", "木", "金", "土"];
  const w = week[date.getDay()];
  return `${d} ${w}`;
}
