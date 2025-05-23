import { styles } from "../style";

export const classes = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: styles.color.primaryBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    gap: 2,
    alignItems: "center",
    width: { lg: "70%", md: "85%" },
    height: { lg: "80%", md: "90%" },
  },
  headerContainer: {
    display: "flex",
    gap: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  appLogoContainer: { width: "70px", height: "70px" },
  appLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 4,
  },
  title: {
    color: styles.color.primaryYellow,
    fontFamily: "Aleo",
    fontWeight: 700,
    fontSize: { lg: "48px", md: "44px", sm: "40px" },
  },
  imagesContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "90vw",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowX: "auto",
  },
  imagesInnerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    overflowX: "scroll",
    gap: 2,
  },
  previewImage: { width: "200px" },
  comingSoonText: {
    fontFamily: "Aleo",
    color: styles.color.white,
    fontWeight: 500,
    fontSize: "24px",
    textAlign: "center",
  },
  imageBox: {
    width: { sm: "90%" },
    alignItems: { sm: "center" },
    justifyContent: { sm: "center" },
  },
};
