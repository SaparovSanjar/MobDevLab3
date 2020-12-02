import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

export default function App() {
  

  const movieStr = `{"Search":[{"Title":"Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout","Year":"2020","imdbID":"noid","Type":"test","Poster":"Poster_01.jpg"},{"Title":"Star Wars: Episode IV - A New Hope Star Wars: Episode IV - A New Hope ","Year":"1977","imdbID":"tt0076759","Type":"movie","Poster":"Poster_01.jpg"},{"Title":"Star Wars: Episode V - The Empire Strikes Back","Year":"1980","imdbID":"tt0080684","Type":"movie","Poster":"Poster_02.jpg"},{"Title":"Star Wars: Episode VI - Return of the Jedi","Year":"1983","imdbID":"tt0086190","Type":"movie","Poster":"Poster_03.jpg"},{"Title":"Star Wars: Episode VII - The Force Awakens","Year":"","imdbID":"tt2488496","Type":"movie","Poster":""},{"Title":"Star Wars: Episode I - The Phantom Menace","Year":"1999","imdbID":"tt0120915","Type":"movie","Poster":"Poster_05.jpg"},{"Title":"Star Wars: Episode III - Revenge of the Sith","Year":"2005","imdbID":"tt0121766","Type":"movie","Poster":"Poster_06.jpg"},{"Title":"Star Wars: Episode II - Attack of the Clones","Year":"2002","imdbID":"tt0121765","Type":"movie","Poster":"Poster_07.jpg"},{"Title":"Star Trek","Year":"2009","imdbID":"tt0796366","Type":"movie","Poster":"Poster_08.jpg"},{"Title":"Star Wars: Episode VIII - The Last Jedi","Year":"2017","imdbID":"tt2527336","Type":"","Poster":""},{"Title":"Rogue One: A Star Wars Story","Year":"2016","imdbID":"tt3748528","Type":"movie","Poster":"Poster_10.jpg"}]}`;
  let results = JSON.parse(movieStr).Search;
  const images = {
    "Poster_01.jpg": require("./static/Posters/Poster_01.jpg"),
    "Poster_02.jpg": require("./static/Posters/Poster_02.jpg"),
    "Poster_03.jpg": require("./static/Posters/Poster_03.jpg"),
    "": "",
    "Poster_05.jpg": require("./static/Posters/Poster_05.jpg"),
    "Poster_06.jpg": require("./static/Posters/Poster_06.jpg"),
    "Poster_07.jpg": require("./static/Posters/Poster_07.jpg"),
    "Poster_08.jpg": require("./static/Posters/Poster_08.jpg"),
    "Poster_10.jpg": require("./static/Posters/Poster_10.jpg"),
  };

  
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Movies</Text> */}
      <ScrollView style={styles.results}>
        {results.map((result) => (
          <View key={result.imdbID} style={styles.result}>
            <Image
              source={images[result.Poster]}
              style={{
                width: "100%",
                height: 500,
              }}
              // resizeMode="cover"
            ></Image>
            <Text style={styles.heading}>{result.Title}</Text>
            <Text style={styles.heading}>{result.imdbID}</Text>
            <Text style={styles.heading}>{result.Type}</Text>
            <Text style={styles.heading}>{result.Year}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28ded8",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    color: "#e8a933",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  searchbox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#e8a933",
    borderRadius: 8,
    marginBottom: 40,
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  heading: {
    color: "#472f01",
    fontSize: 18,
    fontWeight: "700",
    padding: 20,
    backgroundColor: "#e8a933",
  },
});
