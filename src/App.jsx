import "./App.css";
import { Box, Stack, Typography } from "@mui/material";
import { classes } from "./styles/appStyles";

const images = ["initial", "empty", "search", "meaning"];

function App() {
  return (
    <>
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
                  <Box>
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
    </>
  );
}

export default App;
