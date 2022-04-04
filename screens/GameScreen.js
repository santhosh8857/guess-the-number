import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

// to generate random Number as a guess
function generateRandomBetween(min, max, exclude) {
  // Math.random() return a value between 0 - 1
  // there is somecase that we can get 0, hence we are adding min to it
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>Rounds</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
