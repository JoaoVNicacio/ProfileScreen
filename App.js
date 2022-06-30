// Perfil GitHub - React Native - DIO
import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from 'react-native'

// VARIÁVEIS COM REPETIÇÃO OU LINKS:
// Cor de fundo do GitHub
const colorGithub = '#010409'

// Imagem de perfil
const profileImageGitHub = 'https://avatars.githubusercontent.com/u/74374178?s=400&u=4a3d3be3896d3424944fdaf1f3941b1786c5aa1e&v=4'

// cor da fonte do username:
const usernameFontColor = '#C9D1D9'

// Cor de fundo da view:
const viewBackgroundColor = '#161b22'

// Links do LinkedIn e Github:
const myLinkedInURL = 'https://www.linkedin.com/in/jo%C3%A3o-victor-nic%C3%A1cio-203297202/';
const myGitHubURL = 'https://github.com/JoaoVNicacio'

// Exportando o app
export default function App() {

  // Função Assincrona para abrir o LinkedIn
  const handlePressGoToLinkedIn = async() =>{
    const response = await Linking.canOpenURL(myLinkedInURL)
    console.log(`Verifying Link`)
    //Lidando com a promisse:
    if (response){
      console.log(`Link approved`)
      console.log(`Openning...`)
      await Linking.openURL(myLinkedInURL)
    }
  }
  // Função Assincrona para abrir o GitHub
  const handlePressGoToGitHub = async() =>{
    const response = await Linking.canOpenURL(myGitHubURL)
    console.log(`Verifying Link`)
    //Lidando com a promisse:
    if (response){
      console.log(`Link approved`)
      console.log(`Openning...`)
      await Linking.openURL(myGitHubURL)
    }
  }

  // Retorno parte visual:
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='auto' />
      <View style={style.content}>
        <Image style={style.profilePhoto} source={{ uri: profileImageGitHub }} accessibilityLabel="João em uma plateia falando em um microfone." />
        <Text style={style.name} accessibilityLabel="Nome: João Victor Nicácio">João Victor Nicácio</Text>
        <Text style={style.username} accessibilityLabel="Username: João V Nicácio">JoaoVNicacio</Text>
        <Text style={style.text} accessibilityLabel="Bio de Nicácio">Estudante de Sistemas para Internet.
          Desejo aprender tanto tecnologias back-end como as front-end, estou atualmente estudando Node.JS, Python e React Native!</Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text>Abrir no GitHub</Text>
          </View>
        </Pressable>
        <Pressable onPress={handlePressGoToLinkedIn}>
          <View style={style.button}>
          <Text>Abrir no LinkedIn</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

// StyleSheet do projetinho
const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // expandindo o background a toda a tela
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: viewBackgroundColor,
    padding: 25,
    borderRadius:20,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: usernameFontColor,
    marginTop: 30,
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    color: usernameFontColor,
    margin: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: usernameFontColor,
    marginTop: 15,
    marginBottom: 10,
    width: 350,
    textAlign: 'justify',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderColor: usernameFontColor,
    borderWidth: 2,
    borderRadius: 100,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 30,
    backgroundColor: usernameFontColor,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30,
    padding: 15,
  }
})
