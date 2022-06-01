import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings'; 

export default function Livro({ book }){
  return(
    <View style={styles.content}>
      <View style={styles.wraper}>
        <Text style={styles.item}>
          Autor: {book.author}
        </Text>
      </View>
      <View style={styles.wraper}>
        <Text style={styles.item}>
          Título: {book.title}
        </Text>
      </View>
      <View style={styles.wraper}>
        <Text style={styles.item}>Link: {book.url}</Text>
      </View>
      <View style={styles.wraper}>
        <AirbnbRating defaultRating={0} halfStarEnabled={true} reviews={[
            'Terrível',
            'Ruim',
            'Hmm...',
            'OK',
            'Ótimo',            
          ]}/>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  content: {    
    marginTop: 20,
    padding: 15,    
    borderWidth: 3,
    borderColor: 'black'
  },
  wraper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    color: 'black',
  },
});