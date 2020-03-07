import matrix from '../data/matrix';
import coordinates from '../data/coordinates';
const nos = coordinates.map(x => x.name);

/**
 * Line into the original matriz
 * 
 * @param {[][]} matrix 
 * @param {number} line 
 * @return {number[]|string[]}
 */
export const findNeighbors = (matrix, line) => {
    const matrixLine = line - 1;
    return matrix[matrixLine].filter((val) => val != 0);
};

export const findNeighborsDesc = (matrix, line) => {
    const res = [];
    const length = Object.keys(matrix[line]).length - 1;
    for (let i = length; i > 0; i--) {
        if (matrix[line][i] != 0) res.push(matrix[line][i]);
    }
    return res;
};

/**
 * 
 * @param {number} index 
 */
export const matrixLength = (matrix, index) => {
    return Object.keys(matrix[index]).length;
};

/**
 * 
 * @param {number} line 
 * @param {number} column 
 */
export const getAt = (matrix, line, column) => {
    return parseInt(matrix[line][column]);
};

export const toGraph = () => {
    const graph = [];
    for (let i = 0; i < matrix.length; i++) {
        graph[i] = [];
        for (let j = 1; j <= Object.keys(matrix[i]).length; j++) {
            if (matrix[i][j] && matrix[i][j] != 0) {
                // graph[i].push(parseInt(matrix[i][j]));
                graph[i].push(nos[matrix[i][j]]);
            }
        }
    }
    // console.log(`g: ${JSON.stringify(graph)}`);
    return graph;
};

export default matrix;