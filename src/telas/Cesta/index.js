import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

<<<<<<< HEAD
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
=======
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";

import Texto from "../../componentes/Texto";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />

              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
  },
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
>>>>>>> 46e727372094926ce27418d766b614c66c37d907
