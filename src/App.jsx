import "./App.css";
import { Box, Stack, Typography } from "@mui/material";
import { classes } from "./styles/appStyles";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import { styles } from "./style";

const images = ["initial", "empty", "search", "meaning"];

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Stack sx={classes.container}>
              <Stack sx={classes.innerContainer}>
                <Stack sx={classes.headerContainer}>
                  <Box sx={classes.appLogoContainer}>
                    <img src="images/AppLogo.png" style={classes.appLogo} />
                  </Box>
                </Stack>
                <Stack sx={classes.contentContainer}>
                  <Typography sx={classes.title}>Words Made Easy</Typography>
                  <Stack sx={classes.imagesContainer}>
                    <Stack sx={classes.imagesInnerContainer}>
                      {images?.map((_image) => (
                        <Box sx={classes.imageBox}>
                          <img
                            src={`images/${_image}.png`}
                            style={classes.previewImage}
                          />
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                  <Typography sx={classes.comingSoonText}>
                    Coming Soon on the app store
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          }
        />
        <Route
          path="/privacy"
          element={
            <Stack
              sx={{
                backgroundColor: styles.color.primaryYellow,
                color: styles.color.primaryBlue,
                p: 5,
                fontFamily: "Aleo",
              }}
            >
              <PrivacyPolicy />
            </Stack>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
