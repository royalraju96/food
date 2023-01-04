import { React, useState } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultList from "../components/ResultList";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    
  const [term, setTerm] = useState("");
  const { searchApi, results, errorMessage } = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.backGroundStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={{marginLeft:10}}>We have found {results.length} results</Text>
      <ScrollView>
      <ResultList results={filterResultByPrice('$')} title="Cost Effective"/>
      <ResultList results={filterResultByPrice('$$')} title="Bit Pricer"/>
      <ResultList results={filterResultByPrice('$$$')} title="Big Spender"/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backGroundStyle: {
    flex:1,
    marginLeft: 15
  },
});

export default SearchScreen;
