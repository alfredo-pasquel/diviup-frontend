import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Home" />
      <View style={globalStyles.container}>
        <Text style={[globalStyles.text, styles.welcomeText]}>Welcome to the App!</Text>
        <Button
          title="Go to Profile"
          color="#6200ea"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
