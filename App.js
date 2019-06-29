import React from "react";
import { TouchableOpacity, Image } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

import styles from "./styles";
import { postResource } from "./services";

export default class App extends React.Component {
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  takePic = async () => {
    try {
      const { base64 } = await this.camera.takePictureAsync({ base64: true });
      const buffer = `data:image/jpg;base64,${base64}`;

      const response = await postResource(buffer);
    } catch (e) {
      console.log(e.message);
    }
  };

  cam = () => (
    <TouchableOpacity style={styles.button} onPress={this.takePic}>
      <Image
        source={require("./assets/button.png")}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type={Camera.Constants.Type.back}
      >
        {this.cam()}
        <TouchableOpacity style={styles.paw} onPress={this.takePic} />
      </Camera>
    );
  }
}
