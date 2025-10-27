import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import MonthSelect from "./MonthSelect";
// const dynamicMonthSelect = dynamic(() => import("@/app/ui/staff/MonthSelect"), {
//   ssr: false,
// });

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
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
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
        <MonthSelect />
      </Box>
    </Sheet>
  );
}
