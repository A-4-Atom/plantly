import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import { theme } from "../theme";
import { PlantlyImage } from "../components/PlantlyImage";
import { PlantlyButton } from "../components/PlantlyButton";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { usePlantStore } from "../store/plantsStore";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [imageUri, setImageUri] = useState<string>("");
  const addPlant = usePlantStore((state) => state.addPlant);
  const router = useRouter();

  function handlePress() {
    if (!name || !days) {
      return Alert.alert("Validation Error", "Please fill in all fields");
    }
    if (isNaN(Number(days))) {
      return Alert.alert("Validation Error", "Please enter a valid number");
    }
    // console.log({ name, days: Number(days) });
    addPlant(name, Number(days), imageUri);
    router.navigate("/");
  }

  async function handleImagePicker() {
    if (Platform.OS === "web") {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
    // console.log(result);
  }
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
      enableAutomaticScroll
      enableOnAndroid
    >
      <View
        style={{
          alignItems: "center",
          height: 320,
          borderWidth: 2,
          borderColor: theme.colorLightGray,
          marginBottom: 24,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleImagePicker}
          disabled={Platform.OS === "web"}
          hitSlop={50}
        >
          {imageUri ? (
            <PlantlyImage imageUri={imageUri} />
          ) : (
            <Text>Add a Picture For your plant!</Text>
          )}
        </TouchableOpacity>
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
