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

/**
 * @type {{ number: number, name: string, x: string, y: string}[]}
 */
const places = [
    { "number": "1", "name": "Bar da Priscila", "x": "-22,555,293", "y": "-44,960,046" },
    { "number": "2", "name": "Praça São Cristovão", "x": "-22,556,462", "y": "-44,960,896" }
    ,
    { "number": "3", "name": "Padoca da Fiel", "x": "-22,557,084", "y": "-44,960,746" },
    { "number": "4", "name": "Izabelle Davi Doces e Bolo", "x": "-22,556,282", "y": "-44,959,400" },
    { "number": "5", "name": "Equipax Indústria", "x": "-22,555,867", "y": "-44,959,605" }
    ,
    { "number": "6", "name": "Gioavana Restaurante", "x": "-22,557,995", "y": "-44,961,870" },
    { "number": "7", "name": "Delcafe Assesoria", "x": "-22,558,534", "y": "-44,961,652" },
    { "number": "8", "name": "Buffet Maria Clara", "x": "-22,557,649", "y": "-44,960,583" },
    { "number": "9", "name": "ICT - Inglês com Tecnologia", "x": "-22,559,576", "y": "-44,962,776" }
    ,
    { "number": "10", "name": "Mika Burgue's", "x": "-22,560,112", "y": "-44,961,001" },
    { "number": "11", "name": "Comida Caseira Pé da Serra", "x": "-22,559,659", "y": "-44,959,711" }
    ,
    { "number": "12", "name": "Resturante Primavera", "x": "-22,561,558", "y": "-44,961,611" },
    { "number": "13", "name": "Colégio Dinâmico", "x": "-22,561,185", "y": "-44,960,539" }
    ,
    { "number": "14", "name": "ABA - Associação", "x": "-22,557,601", "y": "-44,958,462" }
    ,
    { "number": "15", "name": "Coifas Cruzeiro", "x": "-22,557,279", "y": "-44,957,951" },
    { "number": "16", "name": "AD - Cruzeiro Seg. Retiro", "x": "-22,557,096", "y": "-44,957,688" },
    { "number": "17", "name": "Adega do Robinho", "x": "-22,556,794", "y": "-44,957,178" },
    { "number": "18", "name": "Colégio Adventista", "x": "-22,558,188", "y": "-44,960,361" }
    ,
    { "number": "19", "name": "Le Talton", "x": "-22,558,054", "y": "-44,958,185" },
    { "number": "20", "name": "Igreja Evangelho Quadrangular", "x": "22,558,621", "y": "-44,960,215" },
    { "number": "21", "name": "Delegacia Seccional", "x": "-22,559,159", "y": "-44,959,963" },
    { "number": "22", "name": "Ita Fortes", "x": "-22,558,536", "y": "-44,957,868" },
    { "number": "23", "name": "Ari Calhas", "x": "-22,558,286", "y": "-44,956,133" },
    { "number": "24", "name": "Bar e Mercearia do Zeze", "x": "-22,559,529", "y": "-44,957,173" },
    { "number": "25", "name": "Pops Lanches", "x": "-22,559,583", "y": "-44,957,137" },
    { "number": "26", "name": "Comerical Biondini", "x": "-22,558,761", "y": "-44,955,804" },
    { "number": "27", "name": "Galvão Baterias", "x": "-22,559,236", "y": "-44,955,497" }
    ,
    { "number": "28", "name": "Esquina28", "x": "-22,555,636", "y": "-44,962,902" },
    { "number": "29", "name": "Esquina29", "x": "-22,555,412", "y": "-44,962,300" },
    { "number": "30", "name": "Esquina30", "x": "-22,555,199", "y": "-44,961,723" },
    { "number": "31", "name": "Esquina31", "x": "-22,557,224", "y": "-44,961,519" },
    { "number": "32", "name": "Esquina32", "x": "-22,557,017", "y": "-44,960,954" },
    { "number": "33", "name": "Esquina33", "x": "-22,554,771", "y": "-44,960,927" },
    { "number": "34", "name": "Esquina34", "x": "-22,555,959", "y": "-44,960,876" },
    { "number": "35", "name": "Esquina35", "x": "-22,555,274", "y": "-44,959,366" },
    { "number": "36", "name": "Esquina36", "x": "-22,555,778", "y": "-44,959,714" },
    { "number": "37", "name": "Esquina37", "x": "-22,556,988", "y": "-44,960,783" },
    { "number": "38", "name": "Esquina38", "x": "-22,557,464", "y": "-44,962,104" },
    { "number": "39", "name": "Esquina39", "x": "-22,556,746", "y": "-44,959,066" },
    { "number": "40", "name": "Esquina40", "x": "-22,557,191", "y": "-44,958,753" },
    { "number": "41", "name": "Esquina41", "x": "-22,556,322", "y": "-44,958,820" },
    { "number": "42", "name": "Esquina42", "x": "-22,555,827", "y": "-44,958,495" },
    { "number": "43", "name": "Esquina43", "x": "-22,559,064", "y": "-44,961,429" },
    { "number": "44", "name": "Esquina44", "x": "-22,559,587", "y": "-44,961,231" },
    { "number": "45", "name": "Esquina45", "x": "-22,560,650", "y": "-44,960,765" },
    { "number": "46", "name": "Esquina46", "x": "-22,559,089", "y": "-44,963,134" },
    { "number": "47", "name": "Esquina47", "x": "-22,558,921", "y": "-44,963,289" },
    { "number": "48", "name": "Esquina48", "x": "-22,560,754", "y": "-44,959,337" },
    { "number": "49", "name": "Esquina49", "x": "-22,560,178", "y": "-44,959,513" },
    { "number": "50", "name": "Esquina50", "x": "-22,559,023", "y": "-44,957,522" },
    { "number": "51", "name": "Esquina51", "x": "-22,559,103", "y": "-44,957,453" },
    { "number": "52", "name": "Esquina52", "x": "-22,558,795", "y": "-44,956,941" },
    { "number": "53", "name": "Esquina53", "x": "-22,560,080", "y": "-44,956,941" },
    { "number": "54", "name": "Esquina54", "x": "-22,555,901", "y": "-44,962,791" },
    { "number": "55", "name": "Esquina55", "x": "-22,556,405", "y": "-44,962,575" },
    { "number": "56", "name": "Esquina56", "x": "-22,556,913", "y": "-44,962,337" },
    { "number": "57", "name": "Esquina57", "x": "-22,557,683", "y": "-44,960,988" },
    { "number": "58", "name": "Esquina58", "x": "-22,558,231", "y": "-44,960,801" },
    { "number": "59", "name": "Esquina59", "x": "-22,559,290", "y": "-44,960,342" },
    { "number": "60", "name": "Esquina60", "x": "-22,559,813", "y": "-44,960,102" },
    { "number": "61", "name": "Esquina61", "x": "-22,560,925", "y": "-44,961,502" },
    { "number": "62", "name": "Esquina62", "x": "-22,560,496", "y": "-44,961,961" },
    { "number": "63", "name": "Esquina63", "x": "-22,560,020", "y": "-44,962,280" },
    { "number": "64", "name": "Esquina64", "x": "-22,559,311", "y": "-44,963,035" },
    { "number": "65", "name": "Esquina65", "x": "-22,559,840", "y": "-44,962,625" },
    { "number": "66", "name": "Esquina66", "x": "-22,560,356", "y": "-44,962,299" },
    { "number": "67", "name": "Esquina67", "x": "-22,560,927", "y": "-44,961,973" },
    { "number": "68", "name": "Esquina68", "x": "-22,560,353", "y": "-44,959,936" },
    { "number": "69", "name": "Esquina69", "x": "-22,554,633", "y": "-44,960,515" },
    { "number": "70", "name": "Esquina70", "x": "-22,561,619", "y": "-44,961,566" }
]

export default places;