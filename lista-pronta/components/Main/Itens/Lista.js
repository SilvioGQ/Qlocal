import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, SectionList, FlatList, StatusBar } from 'react-native';


const Lista = [
  {
    id: 1,
    image: 'https://pepfurg.files.wordpress.com/2012/09/foto-23.jpg?w=800',
    title: 'Praça tramandaré',
    description: 'Parque',
    distance: '500m de distancia'
  },
  {
    id: 2,
    image: 'https://pepfurg.files.wordpress.com/2012/09/foto-23.jpg?w=800',
    title: 'Praça tramandaré 2',
    description: 'Parque',
    distance: '500m de distancia'
  },
    {
    id: 3,
    image: 'https://pepfurg.files.wordpress.com/2012/09/foto-23.jpg?w=800',
    title: 'Praça tramandaré 2',
    description: 'Parque',
    distance: '500m de distancia'
  },
    {
    id: 4,
    image: 'https://pepfurg.files.wordpress.com/2012/09/foto-23.jpg?w=800',
    title: 'Praça tramandaré 2',
    description: 'Parque',
    distance: '500m de distancia'
  },
]

const Item = ({ image,title,description,distance }) => (
  <View style={styles.item}>
  <View style={styles.row}>
    <Image style={styles.image} source = {{uri: image}} />
    <View style={styles.ordem}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.distance}>{distance}</Text>
    </View>
    </View>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item image={item.image} title={item.title}  description={item.description}  distance={item.distance} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Lista}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 100
  },
  item: {
    flex:1,
    backgroundColor: '#E4E4E4',
    padding: 4,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
  },
  ordem:{
    justifyContent:'space-around'
  }
});

export default App;