const node = {
    pai: null,
    valor1: 0,
    valor2: 0,
    anterior: null,
    proximo: null,
};

/**
 * 
 * @param {node} pai 
 * @param {*} valor1 
 * @param {*} valor2 
 * @param {node} anterior 
 * @param {node} proximo 
 * 
 * @return {node}
 */
const createNode = (
    pai = null,
    valor1 = null,
    valor2 = null,
    anterior = null,
    proximo = null
) => {
    return {
        pai,
        valor1,
        valor2,
        anterior,
        proximo
    }
};

export const lista = () => {
    /**
     * @type {node}
     */
    let head = null;

    /**
     * @type {node}
     */
    let tail = null;

    /**
     * 
     * @param {*} v1 
     * @param {*} v2 
     * @param {node} pai 
     */
    const inserePrimeiro = (v1, v2, pai) => {
        const newNode = createNode(pai, v1, v2, null, null);
        if (head === null) {
            tail = newNode;
        } else {
            newNode.proximo = head;
            head.anterior = newNode;
        }
        head = newNode;
    };

    /**
     * 
     * @param {*} v1 
     * @param {*} v2 
     * @param {node} pai 
     */
    const insereUltimo = (v1, v2, pai) => {
        const newNode = createNode(pai, v1, v2, null, null);
        if (head === null) {
            head = newNode;
        } else {
            tail.proximo = newNode;
            newNode.anterior = tail;
        }
        tail = newNode;
    };

    const deletaPrimeiro = () => {
        if (head === null) {
            return null;
        } else {
            const node = head;
            head = head.proximo;
            if (head !== null) {
                head.anterior = null;
            } else {
                tail = null;
            }
            return node;
        }
    };

    const deletaUltimo = () => {
        if (tail === null) {
            return null;
        } else {
            const node = tail;
            tail = tail.anterior;
            if (tail !== null) {
                tail.proximo = null;
            } else {
                head = null;
            }
            return node;
        }
    };

    const vazio = () => {
        if (head === null) return true
        return false;
    };

    const exibeLista = () => {
        let aux = head;
        const str = [];
        while (aux !== null) {
            str.push(aux.valor1);
            aux = aux.proximo;
        };
        return str;
    };

    const exibeArvore = () => {
        let atual = tail;
        const caminho = [];
        while (atual.pai !== null) {
            caminho.push(atual.valor1);
            atual = atual.pai;
        }
        caminho.push(atual.valor1);
        return caminho;
    };

    const exibeArvore1 = (valor) => {
        let atual = head;
        while (atual.valor1 !== valor) {
            atual = atual.proximo;
        };

        const caminho = [];
        atual = atual.pai;
        while (atual.pai !== null) {
            caminho.push(atual.valor1);
            atual = atual.pai;
        };
        caminho.push(atual.valor1);
        return caminho;
    };

    const primeiro = () => head;
    const ultimo = () => tail;

    return {
        inserePrimeiro,
        insereUltimo,
        deletaPrimeiro,
        deletaUltimo,
        vazio,
        exibeLista,
        exibeArvore,
        exibeArvore1,
        primeiro,
        ultimo
    };
};