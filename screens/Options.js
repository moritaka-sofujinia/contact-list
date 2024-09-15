import React from "react";
import { StyleSheet, View, Alert, BackHandler } from "react-native";
import DetailListItem from "../components/DetailListItem";

const Options = () => {
  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp()
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <DetailListItem title="Update Profile" />
      <DetailListItem title="Change Language" />
      <DetailListItem title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Options;
