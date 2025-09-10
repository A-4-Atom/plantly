import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "../theme";
import { useUserStore } from "../store/userStore";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  function handlePress() {
    toggleHadOnboarded();
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
      <Button title="Finish Onboarding" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
