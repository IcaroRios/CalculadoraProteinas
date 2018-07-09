import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = {//ENTRADAS
                  precoPacote: '0',
                  pesoPacote:'0',
                  pesoPorcao:'0',
                  proteinaPorcao:'0',
                  //SAIDAS
                  porcentProteina:'Proporção de proteina na porção: ',
                  quantidadeProteina:'Quantidade de proteina no pacote: ',
                  precoPorGrama:'Preço por grama de proteína: ',
    };
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.paragraph}>
            CALCULE O QUANTO SUA PROTEINA ESTÁ VALENDO A PENA!
          </Text>
          <Text>
              {this.state.porcentProteina+((this.state.proteinaPorcao/this.state.pesoPorcao)*100).toFixed(2)+'%'
              }
          </Text>
          <Text style={{color:'red'}}>
              O valor ideal da proporção é acima de 77%
          </Text>
          <Text>
              {this.state.quantidadeProteina+((this.state.pesoPacote/this.state.pesoPorcao)*this.state.proteinaPorcao).toFixed(2)+'g'}
          </Text>
          <Text>
              {this.state.precoPorGrama+ (this.state.precoPacote/((this.state.pesoPacote/this.state.pesoPorcao)*this.state.proteinaPorcao)).toFixed(2)+'R$'}
          </Text>
          <Text style={{color:'red'}}>
             Quanto menor, melhor,o gold standard é em média 0,23
          </Text>
          <View style={{flex: 1,flexDirection: 'row'}}>
            <Text>
              Preço do Pacote(R$):
            </Text>
            <View>
              <TextInput style={{marginLeft:20,width: 50, height: 30, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(precoPacote) => this.setState({precoPacote})}
              value = {this.state.precoPacote}
              maxLength = {4}/>
            </View>
           </View>
          <View style={{flex: 1,flexDirection: 'row'}}>
            <Text>
              Peso do Pacote(g):
            </Text>
            <View>
              <TextInput style={{marginLeft:33,width: 50, height: 30, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(pesoPacote) => this.setState({pesoPacote})}
              value = {this.state.pesoPacote}
              maxLength = {4}/>
            </View>
           </View>
           <View style={{flex: 1,flexDirection: 'row'}}>
            <Text>
              Peso da Porção(g):
            </Text>
            <View>
              <TextInput style={{marginLeft:33,width: 50, height: 30, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(pesoPorcao) => this.setState({pesoPorcao})}
              value = {this.state.pesoPorcao}
              maxLength = {4}/>
            </View>
           </View>
           <View style={{flex: 1,flexDirection: 'row'}}>
              <Text>
                Proteina por porção(g):
              </Text>
          <View>
              <TextInput style={{marginLeft:10,width: 50, height: 30, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(proteinaPorcao) => this.setState({proteinaPorcao})}
              value = {this.state.proteinaPorcao} 
              maxLength = {4}/>
            </View>
           </View>
          <View style={{height:400,flex:1}}>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
