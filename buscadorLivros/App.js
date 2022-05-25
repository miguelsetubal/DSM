import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, FlatList} from "react-native";
import { Text, Item} from 'native-base';

export default function App() {
  const [results, setResult] = useState([]);

  const [livro, setlivro] = useState("");

  const getLivros = (livro) => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${livro}`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data.hits);
      });
  };

  return (
    <View>
      <View style={styles.container}>
      <Item>
        <TextInput
        placeholder={"Qual livros?"}
          value={livro}
          onChangeText={(serachlivro) => setlivro(serachlivro)}
        />
        </Item>
        <Button title="Pesquisar" onPress={() => getLivros(livro)} />
      </View>

      {results.map((result) => (
        <View style={styles.result}>
          <Text>Autor: {result.author}</Text>
          <Text>Título: {result.title}</Text>
          <Text>URL: {result.url}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  result: {
    flex: 1,
    marginBottom: 10,
    width: "100%",
    minHeight: 100,
    borderWidth: 3,
    justifyContent: "flex-end",
    marginTop: 10,
  },
});