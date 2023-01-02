import { React, useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import yelp from "../../../api/yelp";
import SearchBar from "../../../components/SearchBar";


const searchApi =async () => {
const response = yelp.get('/search');

};

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const [results, setResults] = useState([]);

  return (
    <View style={styles.backGroundStyle}>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={() => {console.log('Test of the onterm change')}} />
      <Text>Search Screen</Text>
      <Text>
        We have found {results.length} results
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backGroundStyle: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
