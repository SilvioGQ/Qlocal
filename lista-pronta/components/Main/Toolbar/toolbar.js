import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Toolbar() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('./../../../assets/ordenar.png')} />
    <Text style={styles.qlocal}> Ordenar
    </Text>
    <Image style={styles.logo} source={require('./../../../assets/filtro.png')} />
    <Text style={styles.qlocal}> Filtrar
    </Text>
    <Image style={styles.logo} source={require('./../../../assets/Group.png')} />
    <Text style={styles.qlocal}> Pesquisar
    </Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:0.3,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 22,
    flexDirection:"row",
    backgroundColor: "#EDEDED",
  },
  logo: {
    width: 22,
    height: 22
  },
  qlocal: {
    fontSize: 13,
    fontWeight: "Regular"
  }
});