import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SectionList } from 'react-native';
export default function Lista() {
  return (
    <ScrollView> 
    <View style={styles.container}>
    <View style={styles.row}>
    <Image style={styles.logo} source={{uri: 'https://pepfurg.files.wordpress.com/2012/09/foto-23.jpg?w=800'}} />
    <View style= {styles.ordem}>
    <Text style={styles.qlocal}> Praça tramandaré
    </Text>
    <Text style={styles.menor}> Parque
    </Text>
    <Text style={styles.menor}> 500m de distancia
    </Text>
    </View>
    </View>
    </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: "#EDEDED",
    marginBottom: 12,
  },
  logo: {
    width: 120,
    height: 120
  },
  row:{
    flex:1,
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width:300,
    height:90,
    borderWidth:1,
  },
    qlocal: {
    fontSize: 18,
    fontWeight: "Medium"
  },
  menor:{
    fontSize: 15,
    color:"#888888"
  },
  ordem:{
    flex:1,
    justifyContent:"space-around",
  }
});