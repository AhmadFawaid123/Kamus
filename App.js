import React, { Component} from 'react';
import { View, StatusBar, Text, TextInput } from 'react-native'

let database = [
  {indonesia: 'Ayam', english: ' Chiken'},
  {indonesia: 'Ikan', english: ' Fish'},
  {indonesia: 'Kucing', english: ' Cat'},
  {indonesia: 'Anjing', english: ' Dog'},
  {indonesia: 'Babi', english: ' Pig'},
  {indonesia: 'Hiu', english: ' Shark'},
  {indonesia: 'Paus', english: ' Whale'},
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      data: database
     };
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#2E7D32" barStyle="light-content" />

         <View style={{padding: 20, backgroundColor: '#43A047', elevation: 1}}>
            <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>MyDectionary</Text>
         </View>

         <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, marginVertical: 20, marginHorizontal: 10, borderRadius: 5}}
            onChangeText={text => this.setState({text: text})}
            value={this.state.text}
            placeholder='Masuka Kata Kunci'
         />
         
        

      </View>
    );
  }
}

export default App;