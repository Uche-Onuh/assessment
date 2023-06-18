import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";

import { Navbar, Footer } from "./components";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <nav>
            <Navbar />
          </nav>

          <footer>
            <Footer />
          </footer>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
