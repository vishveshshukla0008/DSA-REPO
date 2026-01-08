var setZeroes = function (matrix) {
    // Iterate on matrix :
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                makeRelatedRowColumnZero(matrix, i, j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == -10) {
                matrix[i][j] = 0
            }
        }
    }

    console.log(matrix)
};


function makeRelatedRowColumnZero(matrix, i, j) {
    // make row to -10 :
    let scol = 0;
    let endCol = matrix[i].length - 1;

    let srow = 0;
    let endRow = matrix.length - 1;


    for (let k = scol; k <= endCol; k++) {
        if (matrix[i][k] != 0) {

            matrix[i][k] = -10;
        }
    }

    for (let s = 0; s <= endRow; s++) {
        if (matrix[s][j] != 0) {
            matrix[s][j] = -10;
        }
    }
}



setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);