import {View, TouchableOpacity, Pressable, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
import Botao from '../components/Botao';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useState} from 'react';

const NovaPlantacao = (props) => {

  const sair = () =>{
    props.navigation.pop();
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [aviso, setAviso] = useState('');
  const regexEmail = /^[A-Za-z0-9.+_-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;

  const verifica = () => {
    if (regexEmail.test(email) == true && senha != '' && senha == confSenha) {
      let regEmail = email;
      let regSenha = senha;
      console.log(regEmail, regSenha);
      setAviso(' ');
      sair();
    } else {
      if (regexEmail.test(email) == false && senha == '') {
        setAviso('E-mail e senha inválidos');
      } else if (senha == '') {
        setAviso('Senha inválida');
      } else if (regexEmail.test(email) == false) {
        setAviso('E-mail inválido');
      } else if (senha != confSenha) {
        setAviso('O campo repetir senha difere da senha');
      }
    }
  };

  return (
    <View style={estilos.tela}>
        
      <ScrollView  vertical={true} style={estilos.scroll} contentContainerStyle={estilos.containerCad}>

      <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Nome da plantação</Text>
          <TextInput
            style={estilos.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Cultura</Text>
          <TextInput
            style={estilos.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Latitude</Text>
          <TextInput
            style={estilos.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>


        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Longitude</Text>
          <TextInput
            style={estilos.textInput}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Semente</Text>
          <TextInput
            style={estilos.textInput}
            secureTextEntry={true}
            value={confSenha}
            onChangeText={setConfSenha}
          />
        </View>

        <View style={estilos.caixaDescricao}>
          <Text style={estilos.texto}>Descricao</Text>
          <TextInput
            style={estilos.textInput}
            value={email}
            onChangeText={setEmail}
            multiline={true}
            numberOfLines={7}
          />
        </View>

        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Foto</Text>
          <TouchableOpacity style={estilos.foto}>
             <Icon name= "upload" size={70} color="black"/>
           </TouchableOpacity>
        </View>
        
        <View style={estilos.containerEntrar}>
          <Text style={estilos.warning}>{aviso}</Text>
          <Botao texto="Cadastrar" funcao = {verifica}/>
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
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 0.07,
    //paddingBottom: '2%',
  },
  scroll:{
    flex: 0.9,
    width: "100%",
    paddingHorizontal: "4%",
  },
  containerCad: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    display: 'flex',
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    marginTop: '3%',
  },
  caixaDeTexto: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    flex: 0.5,
    marginBottom: '1%',
  },
  caixaDescricao:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: 200,
    flex: 0.5,
  },
  texto: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto-Condensed',
  },
  warning: {
    color: 'red',
    fontSize: 18,
    fontFamily: 'Roboto-Regular'
  },
  containerEntrar: {
    paddingVertical: '5%',
    display: 'flex',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  descricaoInput:{
      fontSize: 16,
      backgroundColor: '#E5E5E5',
      width: '100%',
      fontFamily: 'Roboto-Regular',
      height: '100%',
      borderRadius: 5,
      textAlignVertical: 'top'
  },
  textInput: {
    paddingBottom: 4,
    fontSize: 16,
    backgroundColor: '#E5E5E5',
    width: '100%',
    fontFamily: 'Roboto-Regular',
    height: '62.5%',
    borderRadius: 5
  },

  foto:{
    backgroundColor: '#E5E5E5',
    width: '40%',
    alignItems: 'center',
    borderRadius: 5
  },

  botaoEntrar: {
    fontSize: 28,
    //fontWeight: 400,
    display: 'flex',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#37BD6D',
    width: '80%',
    height: '70%',
  },
});

export default NovaPlantacao;

