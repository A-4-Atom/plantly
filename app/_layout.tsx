import { Stack, SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", title: "Add Plant" }}
      />
    </Stack>
  );
}
