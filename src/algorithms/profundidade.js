import { lista } from '../services/listaEncadeada';
import { toGraph } from '../services/matrix';
import coordinates from '../data/coordinates';

const nos = coordinates.map(x => x.name);
const grafo = toGraph();

/**
 * 
 * @param {number} inicio 
 * @param {number} fim 
 */
const amplitude = (inicio, fim) => {

    const l1 = lista();
    const l2 = lista();
    const visitado = [];

    l1.insereUltimo(inicio, 0, null);
    l2.insereUltimo(inicio, 0, null);
    let linha = [];
    linha.push(inicio);
    linha.push(0);
    visitado.push(linha);

    let flag1 = false;
    while (!l1.vazio() && flag1 == false) {
        let atual = l1.deletaUltimo();
        let ind = nos.indexOf(atual.valor1);

        for (let i = 0; i < grafo[ind].length; i++) {
            let novo = grafo[ind][i];

            let flag = true;
            for (let j = 0; j < visitado.length; j++) {
                if (visitado[j][0] == novo) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                l1.insereUltimo(novo, atual.valor2 + 1, atual);
                l2.insereUltimo(novo, atual.valor2 + 1, atual);
                linha = [];
                linha.push(novo);
                linha.push(atual.valor2 + 1);
                visitado.push(linha);
                if (novo == fim) {
                    flag1 = true;
                    break;
                }
            }
        }
    };
    let caminho = []
    if (flag1) caminho = l2.exibeArvore();
    else caminho = "Caminho não encontrado";
    return caminho;
};

export default amplitude;