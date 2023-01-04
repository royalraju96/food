import { React } from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  console.log(term);
  return (
    <View style={styles.backGroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onTermSubmit}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backGroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
