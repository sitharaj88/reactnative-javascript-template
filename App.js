import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/state";
import { ThemeProvider } from "react-native-rapi-ui";
import Counter from "./src/view/pages/counter";
import AppNavigator from "./src/view/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme="dark">
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
