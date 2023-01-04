import React from "react";

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }
  return (
    <View>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
                <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:10,
    marginLeft:10
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultList);
