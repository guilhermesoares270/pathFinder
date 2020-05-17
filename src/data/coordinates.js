/**
 * @param {{}[]} coordinates
 * @param {number} num 
 */
export const index = (coordinates, num) => {
    // console.log(`YYY: ${num}`);
    let res = null;
    for (let i = 0; i < coordinates.length; i++) {
        // console.log(`coordinates[${i}].number: ${coordinates[i].number} - t: ${typeof coordinates[i].number}`);
        if (coordinates[i].number === (num + 1).toString()) {
            res = i;
            break;
        }
    };
    // console.log(`IIIIIIII: ${res}`);
    return res;
};

// /**
//  * 
//  * @param {string} name 
//  */
// export const indexName = name => {
//     const ind = places.filter(x => x.name === name);
//     if (ind.length === 0) return null;
//     return ind[0];
// };

export const getByName = name => {
    console.log(`getByName: ${name}`);
    const data = places.filter(x => x.name === name);
    if (data.length === 0) return null;
    return data[0];
};

/**
 * @type {{ number: number, name: string, x: number, y: number}[]}
 */
const places = [
    { "number": "1", "name": "Bar da Priscila", "x": -22.555293, "y": -44.960046 },

    { "number": "2", "name": "Praça São Cristovão", "x": -22.556462, "y": -44.960896 },

    { "number": "3", "name": "Padoca da Fiel", "x": -22.557084, "y": -44.960746 },

    { "number": "4", "name": "Izabelle Davi Doces e Bolo", "x": -22.556282, "y": -44.959400 },

    { "number": "5", "name": "Equipax Indústria", "x": -22.555867, "y": -44.959605 },

    { "number": "6", "name": "Gioavana Restaurante", "x": -22.557995, "y": -44.961870 },

    { "number": "7", "name": "Delcafe Assesoria", "x": -22.558534, "y": -44.961652 },

    { "number": "8", "name": "Buffet Maria Clara", "x": -22.557649, "y": -44.960583 },

    { "number": "9", "name": "ICT - Inglês com Tecnologia", "x": -22.559576, "y": -44.962776 },

    { "number": "10", "name": "Mika Burgue's", "x": -22.560112, "y": -44.961001 },

    { "number": "11", "name": "Comida Caseira Pé da Serra", "x": -22.559659, "y": -44.959711 },

    { "number": "12", "name": "Resturante Primavera", "x": -22.561558, "y": -44.961611 },

    { "number": "13", "name": "Colégio Dinâmico", "x": -22.561185, "y": -44.960539 },

    { "number": "14", "name": "ABA - Associação", "x": -22.557601, "y": -44.958462 },

    { "number": "15", "name": "Coifas Cruzeiro", "x": -22.557279, "y": -44.957951 },

    { "number": "16", "name": "AD - Cruzeiro Seg. Retiro", "x": -22.557096, "y": -44.957688 },

    { "number": "17", "name": "Adega do Robinho", "x": -22.556794, "y": -44.957178 },

    { "number": "18", "name": "Colégio Adventista", "x": -22.558188, "y": -44.960361 },

    { "number": "19", "name": "Le Talton", "x": -22.558054, "y": -44.958185 },

    { "number": "20", "name": "Igreja Evangelho Quadrangular", "x": -22.558621, "y": -44.960215 },

    { "number": "21", "name": "Delegacia Seccional", "x": -22.559159, "y": -44.959963 },

    { "number": "22", "name": "Ita Fortes", "x": -22.558536, "y": -44.957868 },

    { "number": "23", "name": "Ari Calhas", "x": -22.558286, "y": -44.956133 },

    { "number": "24", "name": "Bar e Mercearia do Zeze", "x": -22.559529, "y": -44.957173 },

    { "number": "25", "name": "Pops Lanches", "x": -22.559583, "y": -44.957137 },

    { "number": "26", "name": "Comerical Biondini", "x": -22.558761, "y": -44.955804 },

    { "number": "27", "name": "Galvão Baterias", "x": -22.559236, "y": -44.955497 },

    { "number": "28", "name": "Esquina28", "x": -22.555636, "y": -44.962902 },

    { "number": "29", "name": "Esquina29", "x": -22.555412, "y": -44.962300 },

    { "number": "30", "name": "Esquina30", "x": -22.555199, "y": -44.961723 },

    { "number": "31", "name": "Esquina31", "x": -22.557224, "y": -44.961519 },

    { "number": "32", "name": "Esquina32", "x": -22.557017, "y": -44.960954 },

    { "number": "33", "name": "Esquina33", "x": -22.554771, "y": -44.960927 },

    { "number": "34", "name": "Esquina34", "x": -22.555959, "y": -44.960876 },

    { "number": "35", "name": "Esquina35", "x": -22.555274, "y": -44.959366 },

    { "number": "36", "name": "Esquina36", "x": -22.555778, "y": -44.959714 },

    { "number": "37", "name": "Esquina37", "x": -22.556988, "y": -44.960783 },

    { "number": "38", "name": "Esquina38", "x": -22.557464, "y": -44.962104 },

    { "number": "39", "name": "Esquina39", "x": -22.556746, "y": -44.959066 },

    { "number": "40", "name": "Esquina40", "x": -22.557191, "y": -44.958753 },

    { "number": "41", "name": "Esquina41", "x": -22.556322, "y": -44.958820 },

    { "number": "42", "name": "Esquina42", "x": -22.555827, "y": -44.958495 },

    { "number": "43", "name": "Esquina43", "x": -22.559064, "y": -44.961429 },

    { "number": "44", "name": "Esquina44", "x": -22.559587, "y": -44.961231 },

    { "number": "45", "name": "Esquina45", "x": -22.560650, "y": -44.960765 },

    { "number": "46", "name": "Esquina46", "x": -22.559089, "y": -44.963134 },

    { "number": "47", "name": "Esquina47", "x": -22.558921, "y": -44.963289 },

    { "number": "48", "name": "Esquina48", "x": -22.560754, "y": -44.959337 },

    { "number": "49", "name": "Esquina49", "x": -22.560178, "y": -44.959513 },

    { "number": "50", "name": "Esquina50", "x": -22.559023, "y": -44.957522 },

    { "number": "51", "name": "Esquina51", "x": -22.559103, "y": -44.957453 },

    { "number": "52", "name": "Esquina52", "x": -22.558795, "y": -44.956941 },

    { "number": "53", "name": "Esquina53", "x": -22.560080, "y": -44.956941 },

    { "number": "54", "name": "Esquina54", "x": -22.555901, "y": -44.962791 },

    { "number": "55", "name": "Esquina55", "x": -22.556405, "y": -44.962575 },

    { "number": "56", "name": "Esquina56", "x": -22.556913, "y": -44.962337 },

    { "number": "57", "name": "Esquina57", "x": -22.557683, "y": -44.960988 },

    { "number": "58", "name": "Esquina58", "x": -22.558231, "y": -44.960801 },

    { "number": "59", "name": "Esquina59", "x": -22.559290, "y": -44.960342 },

    { "number": "60", "name": "Esquina60", "x": -22.559813, "y": -44.960102 },

    { "number": "61", "name": "Esquina61", "x": -22.560925, "y": -44.961502 },

    { "number": "62", "name": "Esquina62", "x": -22.560496, "y": -44.961961 },

    { "number": "63", "name": "Esquina63", "x": -22.560020, "y": -44.962280 },

    { "number": "64", "name": "Esquina64", "x": -22.559311, "y": -44.963035 },

    { "number": "65", "name": "Esquina65", "x": -22.559840, "y": -44.962625 },

    { "number": "66", "name": "Esquina66", "x": -22.560356, "y": -44.962299 },

    { "number": "67", "name": "Esquina67", "x": -22.560927, "y": -44.961973 },

    { "number": "68", "name": "Esquina68", "x": -22.560353, "y": -44.959936 },

    { "number": "69", "name": "Esquina69", "x": -22.554633, "y": -44.960515 },

    { "number": "70", "name": "Esquina70", "x": -22.561619, "y": -44.961566 },
]

export default places;