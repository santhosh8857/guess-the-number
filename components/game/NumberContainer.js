import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.secondary500,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
