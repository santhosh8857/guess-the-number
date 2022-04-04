import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "white",
    color: Colors.secondary500,
    textAlign: "center",
  },
});
