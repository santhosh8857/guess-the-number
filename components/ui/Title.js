import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    marginTop: 12,
    padding: 12,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    textAlign: "center",
  },
});
