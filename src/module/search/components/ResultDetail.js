import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.star}> 
        {result.rating} Stars, {result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 10,
    marginLeft:10
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:10
  },
  star: {
    marginLeft: 10
  }
});

export default ResultDetail;
