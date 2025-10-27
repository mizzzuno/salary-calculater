import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
// Local TestButton component defined below

const TestButton = () => {
  return <Box component="span">Test</Box>;
};

export default function ColorInversionFooter() {
  return (
    <Sheet
      variant="solid"
      color={'neutral'}
      invertedColors
      sx={[
        {
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: 'sm' },
        },
      ]}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'flex-start' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <ListItemButton sx={{display: 'flex', alignItems: 'center'}}>勤務履歴 確認・登録</ListItemButton>
        </Box>        
      </Box>
      <Divider sx={{ my: 2 }} />
      <IconButton variant="plain">
        <TestButton />
      </IconButton>
    </Sheet>
  );
}
