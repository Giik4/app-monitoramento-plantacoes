import {View, TouchableOpacity, Image, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import CardVoo from '../components/CardVoo';
import Menu from '../components/Menu';

const Plantacao = (props) => {
  const navigation = useNavigation()

  return (
    <View style={estilos.tela}>
        
      <ScrollView  vertical={true} style={estilos.scrollVert} contentContainerStyle={estilos.containerPlant}>

      <View style={estilos.cabecalho}>
        <Image source={require('../../assets/images/soja.jpg')} style={estilos.image} resizeMode='cover'/>
        <Text style={estilos.nome}>Soja</Text>
      </View>

      <Text style={estilos.informacoes}>Voos</Text>

      <ScrollView  
      horizontal={true} 
      style={estilos.scrollHori} 
      contentContainerStyle={estilos.containerVoo}
      showsHorizontalScrollIndicator={false}
      >

      <CardVoo
          onPress={() => navigation.navigate('Voo')}
          image={require('../../assets/images/ortofoto.jpeg')}
          data='10/10/2023'
        />

        <CardVoo
          onPress={() => navigation.navigate('Voo')}
          image={require('../../assets/images/ortofoto.jpeg')}
          data='05/06/2022'
        />

        <CardVoo
          onPress={() => navigation.navigate('Voo')}
          image={require('../../assets/images/ortofoto.jpeg')}
          data='01/04/2022'
        />

        <CardVoo
          onPress={() => navigation.navigate('Voo')}
          image={require('../../assets/images/ortofoto.jpeg')}
          data='23/04/2023'
        />
      
      </ScrollView>



      <View style={estilos.containerInfo}>

      <Text style={estilos.informacoes}>Informações</Text>

          <View>
            <Text style={estilos.titulo}>Cultura</Text>
            <Text style={estilos.atributo}>Soja</Text>
          </View>

          <View>
            <Text style={estilos.titulo}>Latitude</Text>
            <Text style={estilos.atributo}>-41.876167</Text>
          </View>

          <View>
            <Text style={estilos.titulo}>Longitude</Text>
            <Text style={estilos.atributo}>0.984000</Text>
          </View>

          <View>
            <Text style={estilos.titulo}>Semente</Text>
            <Text style={estilos.atributo}>BRS 284</Text>
          </View>

          <View>
            <Text style={estilos.titulo}>Descrição</Text>
            <Text style={estilos.atributo}>Apresentam caule híspido, pouco ramificado e raiz com 
              eixo principal e muitas ramificações. Possuem folhas trifolioladas 
              (exceto o primeiro par de folhas simples, no nó acima do nó cotiledonar). 
              Têm flores de fecundação autógama, típicas da subfamília Papileonoideae, de cor 
              branca, roxa ou intermediária. Desenvolvem vagens (legumes) levemente arqueadas que, 
              à medida que amadurecem, evoluem da cor verde para amarelo-pálido, marrom-claro, marrom 
              ou cinza, e que podem conter de uma a cinco sementes lisas, elípticas ou globosas, de 
              tegumento amarelo pálido, com hilo preto, marrom, ou amarelo-palha. 
            </Text>
          </View>

          <View>
            <Text style={estilos.titulo}>Última atualização:</Text>
            <Text style={estilos.atributo}>10/10/2023</Text>
          </View>

          <View>
            <Text style={estilos.titulo}>Criado em:</Text>
            <Text style={estilos.atributo}>20/07/2022</Text>
          </View>

        </View>

        <View style={estilos.containerOpcoes}>
          <TouchableOpacity>
          <Icon name="pencil" size={60} color="black"/>
          <Text style={estilos.texto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="delete" size={60} color="black"/>
          <Text style={estilos.texto}>Deletar</Text>
        </TouchableOpacity>
          </View>
      

      </ScrollView>

    </View>
  );
};

const estilos = StyleSheet.create({
  tela: {
    backgroundColor: '#F6F6F6',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cabecalho: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 1, 
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:'100%',
    height: 200,
    paddingVertical: 10
  },

  informacoes:{
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 32,
    color: 'black' 
  },

  containerInfo:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'start',
    width:'100%',
    gap: 5
  },

  titulo: {
    fontFamily: 'RobotoCondensed-Medium',
    fontSize: 28,
    color: 'black' 
  },

  atributo: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#515151' 
  },

  nome:{
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 24,
    color: 'black' 
  },

  image:{
    width: 130,
    height: 130,
    borderRadius: 130/2,
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '5%'
    //paddingBottom: '2%',
  },
  scrollVert:{
    width: "100%",
    paddingHorizontal: "4%",
  },

  containerPlant: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    width: '100%',
    gap: 15
  },

  scrollHori:{
    height: 130,
  },

  containerVoo:{ 
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '2.5%',
  },
  
  texto: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto-Condensed',
  },
  
  containerOpcoes:{
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-around',
    paddingTop: 50,
    height: 250
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

export default Plantacao;

