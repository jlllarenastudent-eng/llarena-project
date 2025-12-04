import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const name: string = "Julia Marie";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <Text style={styles.Text1}>Welcome, {name}</Text>
        <Text style={styles.Text2}>Hello World! Expo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Text1: {
    color: "blue",
    fontSize: 40,
  },
  Text2: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 50,
  },
});
