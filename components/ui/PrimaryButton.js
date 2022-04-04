import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

// we receive a confirmInputHandler from the StartFameScreen
function PrimaryButton({ children, onPress }) {
  // function pressHandler() {
  //   onPress();
  // }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        // calling the prop function and execute in parent component
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

// To be known
// pressed destructured from object, if the pressed is true then apply these styles or the other one
// like hover effect!!
// rippleeffect will not be applied to IOS instead we can use stylings
