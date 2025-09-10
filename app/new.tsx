import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { theme } from "../theme";
import { PlantlyImage } from "../components/PlantlyImage";
import { PlantlyButton } from "../components/PlantlyButton";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function NewScreen() {
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>("");

  function handlePress() {
    if (!name || !days) {
      return Alert.alert("Validation Error", "Please fill in all fields");
    }
    if (isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Please enter a valid number for watering frequency",
      );
    }
    console.log({ name, days: Number(days) });
  }
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ alignItems: "center" }}>
        <PlantlyImage />
      </View>

      <Text style={styles.text}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Plant Name"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>Watering Frequency</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. 6"
        keyboardType="number-pad"
        value={days}
        onChangeText={setDays}
      />

      <PlantlyButton title="Add Plant" onPress={handlePress} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGray,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
});
