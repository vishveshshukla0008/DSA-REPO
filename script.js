var rotate = function(matrix) {
    // 1. Find the transpose :
    for(let i=0; i<matrix.length; i++) {
        for(let j=i;j<matrix[i].length;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }


    // 2 . Flip the Matrix
};

rotate([[1,2,3],[4,5,6],[7,8,9]]);