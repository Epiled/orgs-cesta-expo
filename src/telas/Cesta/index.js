import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Texto from "../../components/Texto";

import Topo from "./componets/Topo";
import Detalhes from "./componets/Detalhes";
import Item from "./componets/Item";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                    </View>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
    },
})