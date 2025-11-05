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
import { randomInt, randomUserName } from "@mui/x-data-grid-generator";

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
  },
  {
    field: "jobstart",
    headerName: "勤務開始",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "jobend",
    headerName: "勤務終了",
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "hours",
    headerName: "勤務時間",
    editable: true,
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

const rows: GridRowModel[] = [];

for (let i = 0; i < 50; i += 1) {
  rows.push({
    date: i,
    jobstart: randomInt(9, 17),
    jobend: randomInt(17, 24),
    hours: randomInt(1, 8),
    salary: randomInt(30000, 60000),
  });
}

export default function MultilineEditing() {
  return (
    <div style={{ height: 600, width: "100vw" }}>
      {/* <div style={{ height: 600, width: "375px" }}>*/}
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
