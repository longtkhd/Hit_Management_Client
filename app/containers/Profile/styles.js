export default theme => ({
  root: {},
  header: { position: "absolute", width: "100%", top: 0, zIndex: -99999 },
  logo: {
    padding: 10,
    marginTop: 20,
    marginBottom: 100,
    display: "flex",
    justifyContent: "center"
  },
  helloBox: {
    color: "#3d4451",
    marginBottom: "25px",
    borderBottom: "1px solid #dedede"
  },
  hello: {
    marginBottom: "28px",
    background: "orange",
    width: 80,
    padding: 5,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    position: "relative"
  },
  logImg: {
    maxWidth: "100%",
    maxHeight: "40px"
  },
  content: {
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  infomationBox: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    },
    padding: "40px 50px 15px",
    background: "#FFFFFF"
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20
    }
  },
  list: { margin: "0", padding: "0", listStyle: "none" },
  listItem: {
    marginBottom: "13px"
  },
  bottomBar: {
    background: "orange",
    height: 50,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  bioBox: {
    marginTop: 50,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  bio: {
    padding: 20,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  footer: {
    background: "#FF9801",
    width: "100%",
    marginTop: "100px",
    padding: "30px 0"
  },
  footerText: {
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    fontWeightL: "bold",
    color: "white"
  },
  "@media (max-width: 767px)": { infomationBox: { width: "90%" } }
});