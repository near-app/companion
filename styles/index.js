import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  camera: {
    width: width,
    height: height,
    flex: 1
  },
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(255, 243, 93,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },

  gesture: { flex: 1, backgroundColor: "#fff" },

  /* ------------------------------- */
  button: {
    alignSelf: "center",
    marginTop: height / 1.23,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff",
    padding: 15
  },
  buttonImage: {
    height: 40,
    width: 40
  },
  /* ------------------------------- */

  swipe: {
    height: 80,
    width: 80
  },
  logo: {
    height: 300,
    width: 300,
    marginBottom: -80
  },
  loaderLogo: {
    height: 200,
    width: 200
  },
  loaderContainer: {
    marginTop: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  loader: {
    height: height / 5,
    width: width,
    transform: [{ rotate: "-90deg" }],
    marginBottom: 120
  },
  /* ------------------------------- */

  mapContainer: {
    flex: 1
  },

  info: {
    width: width,
    height: 150,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  infoPic: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginLeft: 20,
    borderColor: "#000"
  },
  infoContainer: {
    marginRight: 80,
    paddingHorizontal: 50
  },
  infoName: {
    marginBottom: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontWeight: "900"
  },
  infoDescription: {
    fontSize: 12
  },
  infoButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infoButton: {
    marginTop: 10,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    textAlign: "center",
    color: "#000",
    borderRadius: 10,
    fontWeight: "700",
    width: 90,
    fontSize: 11
  }
});
