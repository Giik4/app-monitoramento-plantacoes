import {View, TouchableOpacity, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Botao from '../components/Botao'
import {useState} from 'react'

const Login = (props) => {

  const irParaNovaConta = () =>{
    props.navigation.navigate('NovaConta')
  }

  const irParaRecuperarSenha = () =>{
  
  }

  const irParaHome = () =>{
    props.navigation.navigate('BottomTabs')
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aviso, setAviso] = useState('');
  const regexEmail = /^[A-Za-z0-9.+_-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;

  const verifica = () => {
    if (regexEmail.test(email) == true && senha != '') {
      let regEmail = email;
      let regSenha = senha;
      console.log(regEmail, regSenha);
      setAviso(' ');
      irParaHome();
    } else {
      if (regexEmail.test(email) == false && senha == '') {
        setAviso('E-mail e senha inválidos');
      } else if (senha == '') {
        setAviso('Senha inválida');
      } else if (regexEmail.test(email) == false) {
        setAviso('E-mail inválido');
      }
    }
  };

  return (
    <View style={estilos.tela}>
        <Text style={estilos.logoText}>Login</Text>
      <View style={estilos.containerLogin}>
        <Text style={estilos.warning}>{aviso}</Text>
          <TextInput
            style={estilos.textInput}
            placeholder="Email"
            placeholderTextColor="#8E88FD"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={estilos.textInput}
            placeholder="Senha"
            placeholderTextColor="#8E88FD"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />
          <View style={{width: '100%', alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <Text style={estilos.texto}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        <View style={estilos.containerEntrar}>
          <Botao texto="Entrar" funcao = {verifica}/>
        </View>
      </View>

      <View style={estilos.containerCadastro}>
        <Text style={estilos.texto}>Não possui conta?</Text>
        <Botao texto="Cadastrar-se" funcao = {irParaNovaConta}/>
      </View>
      

    </View>
  );
};

const estilos = StyleSheet.create({
  tela:{
    backgroundColor: '#F6F6F6',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: '8%',
  },
  logoText: {
    fontSize: 40,
    color: '#F6C500',
    fontFamily: 'Poppins-Medium',
  },
  containerLogin: {
    display: 'flex',
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: "space-evenly",
    alignItems: 'center',
    width: '100%',
  },
  caixaDeTexto: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
    flex: 0.5,
    marginBottom: '1%',
  },
  warning:{
    color: '#FD7979',
    fontSize: 18,
    fontFamily: 'Roboto-Regular'
  },
  containerEntrar: {
    display: 'flex',
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerCadastro:{
    width: '100%',
    height: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  textInput: {
    fontSize: 18,
    backgroundColor: '#DEDDF6',
    color: 'black',
    width: '100%',
    fontFamily: 'Roboto-Regular'
  },

  texto:{
    fontSize: 18,
    color: '515151',
    fontFamily: 'Roboto-Regular'
  }
});

export default Login;
