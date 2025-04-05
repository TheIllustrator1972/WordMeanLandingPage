import { styles } from "../style";

export const classes = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: styles.color.primaryBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: { width: "70%", height: "80%" },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
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
    gap: 5,
  },
  title: {
    color: styles.color.primaryYellow,
    fontFamily: "Aleo",
    fontWeight: 700,
    fontSize: "48px",
  },
  imagesContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesInnerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  previewImage: { width: "200px" },
  comingSoonText: {
    fontFamily: "Aleo",
    color: styles.color.white,
    fontWeight: 500,
    fontSize: "24px",
  },
};
