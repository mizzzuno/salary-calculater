import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import TestButton from "./TestButton";

export default function Header() {
  return (
    <Sheet
      variant="solid"
      color={"neutral"}
      invertedColors
      sx={[
        {
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: "sm" },
        },
      ]}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box
            sx={{
              fontSize: { xs: "1.5rem" },
            }}
          >
            勤務履歴 確認・登録
          </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ mr: 1 }}>月選択</Box>
          <TestButton />
      </Box>
      
    </Sheet>
  );
}
