<<<<<<< HEAD
import logo from "../../assets/logo.png";
=======
import logo from '../../assets/logo.png';
>>>>>>> 46e727372094926ce27418d766b614c66c37d907

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: "Detalhe da Cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
<<<<<<< HEAD
        imagemFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
=======
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
>>>>>>> 46e727372094926ce27418d766b614c66c37d907
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;