import React from "react";
import { StyleSheet } from "react-native";
import Toast from "react-native-easy-toast";
import Theme from "../../constants/Theme";

const Toaster = React.forwardRef((props, ref) => (
  <Toast
    ref={ref}
    position="top"
    positionValue={100}
    fadeInDuration={500}
    fadeOutDuration={500}
    opacity={0.6}
    style={styles.Container}
  />
));

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Theme.Toaster.ContainerBackgroundColor
  }
});

export default Toaster;
