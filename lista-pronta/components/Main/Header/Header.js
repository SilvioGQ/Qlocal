import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';import Constants from "expo-constants";
import Toolbar from '../Toolbar/toolbar'
import Lista from '../Itens/Lista'

export default function Header() {
  return (
    <View style={styles.container}>
    <View  style={styles.row}> 
    <Text style={styles.qlocal}> Qlocal
    </Text>
    <Image style={styles.logo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}} />
    </View>
    <Toolbar/>
    <Lista/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  row:{
    flexGrow : 0.2,
    backgroundColor: "#228B22",
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30
  },
  qlocal: {
    fontSize: 24,
  }
});