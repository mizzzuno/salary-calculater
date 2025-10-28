import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";

export default function ButtonIcons() {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Button
        startDecorator={<Add />}
        color="neutral"
        onClick={function () {}}
        variant="solid"
      >
        出退勤を登録
      </Button>
    </Box>
  );
}
