import { Box, useTheme } from "@mui/material";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Cars Architecture" subtitle="Designs" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        
      </Box>
    </Box>
  );
};

export default Geography;
