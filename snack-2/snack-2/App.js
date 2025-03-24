import React, { useState } from 'react';
import { View, TextInput, Button,} from 'react-native';
import { styles } from './Css/style.js';

const App = () =>{
  const[nota1, setNota1] = useState('');
  const[nota2, setNota2] = useState('');
  const[nota3, setNota3] = useState('');
  const[nota4, setNota4] = useState('');
  const[resultado, setResultado] = useState('');
  const[mensagem, setMensagem] = useState('');
  
  const calcularMedia = () => {

    const n1 = parseInt(nota1);
    const n2 = parseInt(nota2);
    const n3 = parseInt(nota3);
    const n4 = parseInt(nota4);
    const resultado = (((n1) + (n2) + (n3) + (n4)) / 4)
    
    if((resultado) >= 6){
      setMensagem('Aprovado')
    }

    if((resultado) > 4.0 && (resultado) < 6.0)
      setMensagem('Recuperação')

    if((resultado) < 4){
      setMensagem('Reprovado')
    }
  
      

  
  };

  return(
    <View style={styles.container}>
      <TextInput 
      style ={styles.input}
      placeholder='digite sua primeira nota:'
      keyboardType='numeric'
      value={nota1}
      onChangeText={setNota1}
      />
      <TextInput 
      style ={styles.input}
      placeholder='digite sua segunda nota:'
      keyboardType='numeric'
      value={nota2}
      onChangeText={setNota2}
      />
      <TextInput 
      style ={styles.input}
      placeholder='digite sua terceira nota:'
      keyboardType='numeric'
      value={nota3}
      onChangeText={setNota3}
      />
      <TextInput
      style ={styles.input}
      placeholder='digite sua quarta nota:'
      keyboardType='numeric'
      value={nota4}
      onChangeText={setNota4} 
      />
      
       <TextInput
      style ={styles.input}
      keyboardType='numeric'
      value={mensagem}
      onChangeText={setMensagem} 
      editable = {false}
      />
      <Button title ='calcular' onPress={calcularMedia}/>
      </View>
  );

};


export default App;