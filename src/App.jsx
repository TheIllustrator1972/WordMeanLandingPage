import "./App.css";
import { Box, Stack, Typography } from "@mui/material";
import { classes } from "./styles/appStyles";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import { styles } from "./style";
import EmailIcon from "@mui/icons-material/Email";
import DownloadOnAppStoreImage from "./assets/DownloadOnAppStoreImage";

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
                  <Box
                    component="a"
                    href="https://apple.co/3YPtYea"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: "inline-block" }}
                  >
                    <DownloadOnAppStoreImage />
                  </Box>
                  <Stack
                    sx={{ flexDirection: "row", gap: 3, alignItems: "center" }}
                  >
                    <Typography sx={classes.comingSoonText}>
                      Contact Me{" "}
                    </Typography>
                    <a
                      href="mailto:theillustrator2001@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      <EmailIcon
                        onClick={() => {}}
                        sx={{
                          color: styles.color.primaryYellow,
                          fontSize: "24px",
                        }}
                      />
                    </a>
                  </Stack>
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
