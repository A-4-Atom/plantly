import { Stack, SplashScreen } from "expo-router";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { useQuickActionRouting } from "expo-quick-actions/router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a Plant",
        icon: "leaf",
        id: "0",
        params: {
          href: "/new",
        },
      },
    ]);
  }, []);

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
