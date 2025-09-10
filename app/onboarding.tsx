import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";
import { useUserStore } from "../store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "../components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  function handlePress() {
    toggleHadOnboarded();
    router.replace("/");
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <Text style={styles.text}>Onboarding</Text>
      <PlantlyButton title="Finish Onboarding" onPress={handlePress} />
      <StatusBar style="light" />
    </LinearGradient>
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
