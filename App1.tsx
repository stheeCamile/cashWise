import React from 'react';
import {Image,Text, View, ScrollView, StyleSheet,
FlatList} from 'react-native';
import dados from './alunos_json.js';
function App() {
 const renderAluno = ({item: d}) => {
 return <Text>{d.nome} com nota {d.nota} </Text>
 }

return(
 <View style={estilo.container}>
 <Text style={estilo.textBig}>Exemplo
</Text>
 <Text style={estilo.textMedium}>

 </Text>
 <Text style={estilo.textBig}>Lista</Text>

<FlatList
 data={dados}
 keyExtractor={i => i.id}
 renderItem={ renderAluno }
 ListEmptyComponent = <Text
style={estilo.textListaVazia}>Lista vazia</Text>
 ListHeaderComponent = <Text
style={estilo.textHeaderTextLista}>Título da lista </Text>
 ListHeaderComponentStyle = {estilo.containerHeaderLista}
 ListFooterComponent = <Text style={estilo.textWhite}>Este é o
rodapé da Lista</Text>
 ListFooterComponentStyle = {estilo.containerBlack}
 />
 </View>

)
 } ;
const estilo = StyleSheet.create({
 simple:{
 backgroundColor: '#ffffff',
 },
 container: {
 flexGrow:1,
 alignItems: "center",
 justifyContent: "center",
 backgroundColor: '#ffffff',
 },
 containerHeaderLista:{
 flexDirection: "row",
 justifyContent: "center",
 backgroundColor : "#000a0a",
 },
 containerBlack:{
 flexDirection: "row",
 justifyContent: "center",
 backgroundColor: '#000000',
 },
 textSmall:{
 fontSize: 12,
 },
 textMedium:{
 fontSize: 16,
 },
 textBig: {
 fontSize: 24,
 },
React native – Listas – exemplo 8
 textRed:{
 color: "#FF0000",
 },
 textBlue:{
 color: "#0000FF",
 },
 textWhite:{
 color: "#FFFFFF",
 },
 textListaVazia: {
 color: "#0000FF",
 fontWeight: "bold",
 } ,
 textHeaderTextLista:{
 color: "#00ffaa",
 fontWeight: "bold"
 }
});
export default App;