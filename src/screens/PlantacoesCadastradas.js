import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import CardPlantacao from '../components/CardPlantacao'

const PlantacoesCadastradas = (props) => {
  const navigation = useNavigation()

  return (
    <View style={st.container}>

      <View style={st.cabecalho}>
        <Text style={st.titulo}>Plantações Cadastradas</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('NovaPlantacao')}>
          <Icon name="plus" size={40} color="black"/>
        </TouchableOpacity>
      </View>
        
      {/* Cards */}
      <ScrollView
        vertical={true}
        contentContainerStyle={st.containerCards}
        showsVerticalScrollIndicator={false}
      >
        <CardPlantacao 
          onPress={() => navigation.navigate('Plantacao')}
          image={require('../../assets/images/Cafe.jpg')}
          titulo='Café'
          coordenada= '-41.886567, 0.983090'
        />

        <CardPlantacao 
          onPress={() => navigation.navigate('Plantacao')}
          image={require('../../assets/images/Milho.jpg')}
          titulo='Milho'
          coordenada='-41.856427, 0.983245'
        />

        <CardPlantacao 
          onPress={() => navigation.navigate('Plantacao')}
          image={require('../../assets/images/soja.jpg')}
          titulo='Soja'
          coordenada='-41.876167, 0.984000'
        />

        <CardPlantacao 
          onPress={() => navigation.navigate('Plantacao')}
          image={require('../../assets/images/Trigo.jpg')}
          titulo='Trigo'
          coordenada='-41.815127, 0.987521'
        />
        
      </ScrollView>

    </View>
  );
};

const st = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#F6F6F6',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'start',
    flexDirection: 'column',
    gap: 15

  },
  cabecalho: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: "2%",
    flex: 0.1
  },

  titulo: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 24,
    color: 'black' 

  },

  containerCards: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'stretch',
    gap: 5,
    flex: 1,
    width: "100%",
    paddingHorizontal: "2%",
  },

  barraPesquisa: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 1,
    height: '12%',
    width: '95%',
    marginBottom: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    paddingBottom: 7,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
  },
  icon: {
    width: '20%',
    height: '20%',
    marginRight: 5,
  },
  
  containerMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    width: '100%',
    position: 'absolute',
    marginTop: '175%'
  },
});

export default PlantacoesCadastradas;
