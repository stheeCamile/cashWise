import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

function App() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const addText = () => {
        if (text) {
            setList([...list, text]);
            setText('');
        }
    };

    const deleteList = () => setList([]);

    return (
        <View style={estilo.container}>
            <Text style={estilo.name}>Sthefany Camile</Text>
            <Text style={estilo.name}>2022100150</Text>

            <TextInput
                style={estilo.input}
                placeholder="Digite o texto"
                value={text}
                maxLength={30}
                onChangeText={setText}
            />
            <View style={estilo.buttons}>
                <Button title="Inserir" onPress={addText} />
                <Button title="Limpar" onPress={deleteList} color="red" />
            </View>

            <FlatList
                data={list}
                renderItem={({ item }) => <Text style={estilo.list}>{item}</Text>}
            />
        </View>
    );
};

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '100%',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    list: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        color: "#00ffaa",
        fontWeight: "bold"
    },

});

export default App;
