import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import {useState} from 'react';
import Livro  from './Livro';
 
export default function BuscadorLivro() {

    const [livro, setLivro] = useState('');
    const [result, setResult] = useState([]);
  
    const getLivros = () => {
        fetch(`https://hn.algolia.com/api/v1/search?query=${livro}`)
       .then(response => response.json())
       .then(data =>setResult(data.hits))
       .catch((err)=> console.log("Error!" + err))
  
    };

 return (
    <View>
        <Text style={styles.title}>Qual livros?</Text>
            <TextInput
                style={styles.livro}
                placeholder="Digite o nome de um livro aqui!"
                placeholderTextColor="#555"
                onChangeText={setLivro}
            />
            <Button title="Pesquisar" onPress={() => getLivros(livro)} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {result && result.map((book) => {
                    return <Livro  key={book.objectID} book={book}/>
                })}
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    title: {
      color: 'black',
      fontSize: 22,
      marginBottom: 6,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    input: {
      backgroundColor: 'black',
      fontSize: 18,
      borderRadius: 6,
     
      color: 'black'
    },
    button: {
      backgroundColor: 'blue',
      padding: 2,
      alignItems: 'center',
      marginTop: 20,
      width: 200,
      height: 40,
      marginLeft: 60,
      marginBottom: 40,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 7,
    },
  });