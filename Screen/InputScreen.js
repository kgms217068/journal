import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, TextInput } from 'react-native';

export default function Inputscreen() {

    const [writeMode, setWriteMode] = useState(false);

    const [txt, setTxt] = useState('');

    const originalmemo = [];

    const [memos, setMemos] = useState(originalmemo);

    const [idx, setIdx] = useState(1);

    const deletememo = () => {
        setMemos(prev => []);
        setWriteMode(false);
        setIdx(prev => 1);
    }
    const addMemo = () => {
        let a = { id:idx, memo: txt };
        setMemos(prev=>[...prev,a]);
        setWriteMode(false);

        setIdx(prev => prev + 1);
    }
    const renderMemo = ({ item }) =>{
        return (
            <View style={{ padding: 10, borderBottomColor: '#ddd', borderBottomWidth: 1, flexDirection:'row' }}>
               {/* <Text style={{ marginRight: 10, }}>{item.id}</Text>*/}
                <Text>{item.memo}</Text>
            </View>
        );
    }

    if (writeMode) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#bbb' }}>
            <View style={{ flex: 1}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ padding: 15 }} onPress={() => setWriteMode(false)}>
                            <Text style={{ fontSize: 18, }}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 15 }} onPress={() => addMemo()}>
                            <Text style={{ fontSize: 18, }}>저장</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <TextInput style={{ backgroundColor: '#eee', flex:1, padding:10 }}
                            onChangeText={text => setTxt(text)}
                            multiline
                        />
                    </View>

              
                </View>
            </SafeAreaView>
        );
    }


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: 'lightgray' }}>
            <View style={{}}>
                <Text style={{ fontSize: 22, padding: 15, textAlign: 'center' }}>메 모 장</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ position: 'absolute', right: 20, bottom: 20, zIndex:10, }} >
                    <View style={{
                        width: 50, height: 50, backgroundColor: '#08f', borderRadius: 25,
                        alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity onPress={() => setWriteMode(true)}>
                            <Text style={{ color: '#ffff', }}>업로드</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ position: 'absolute', right: 325, bottom: 20, zIndex: 10, }} >
                    <View style={{
                        width: 50, height: 50, backgroundColor: '#f60', borderRadius: 25,
                        alignItems: 'center', justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={() => deletememo()}>
                            <Text style={{ color: '#ffff', }}>전체삭제</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList data={memos} renderItem={renderMemo} style={{ flex: 1 }}/>
                </View>
            </View>
         
        </SafeAreaView>
    );
}