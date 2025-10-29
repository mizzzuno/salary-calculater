import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
// import DialogTitle from '@mui/joy/DialogTitle';
// import DialogContent from '@mui/joy/DialogContent';
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import RegisterButton from "./RegisterButton";
import InputExpense from "./InputExpense";
import InputTime from "./InputTime";

export default function RegisterModalDialog() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <RegisterButton
        variant="solid"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        出退勤を登録
      </RegisterButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          {/* <DialogTitle>勤務登録</DialogTitle> */}
          {/* <DialogContent>勤務情報を入力してください。</DialogContent> */}
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>勤務開始時間</FormLabel>
                {/* <InputTime autoFocus required /> */}
                <InputTime />
              </FormControl>
              <FormControl>
                <FormLabel>勤務終了時間</FormLabel>
                <InputTime />
              </FormControl>
              <FormControl>
                <FormLabel>休憩開始時間</FormLabel>
                <InputTime />
              </FormControl>
              <FormControl>
                <FormLabel>休憩終了時間</FormLabel>
                <InputTime />
              </FormControl>
              <FormControl>
                <FormLabel>交通費</FormLabel>
                <InputExpense />
              </FormControl>
              <Button type="submit">登録</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
