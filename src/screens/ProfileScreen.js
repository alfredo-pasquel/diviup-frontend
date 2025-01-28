import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Header from "../components/Header";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Profile" />
      <View style={globalStyles.container}>
        <Text style={[globalStyles.text, styles.profileText]}>This is the Profile Screen.</Text>
        <Button
          title="Go to Home"
          color="#6200ea"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
});
