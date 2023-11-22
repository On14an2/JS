function CreateRandomMatrix(rows, cols) {
    const Matrix = [];
    for (let i = 0; i < rows; i++) {
        Matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            Matrix[i][j] = Math.floor(Math.random() * 5); // случайное число от 0 до 4
        }
    }
    return Matrix;
}

function foldMatrix(Matrix1, Matrix2) {
    const res = [];
    for (let i = 0; i < Matrix1.length; i++) {
        res[i] = [];
        for (let j = 0; j < Matrix1[i].length; j++) {
            res[i][j] = Matrix1[i][j] + Matrix2[i][j];
        }
    }
    return res;
}

const Matrix1 = CreateRandomMatrix(4, 4);
const Matrix2 = CreateRandomMatrix(4, 4);

console.log("Матрица 1:");
console.table(Matrix1);

console.log("Матрица 2:");
console.table(Matrix2);

const res = foldMatrix(Matrix1, Matrix2);
console.log("Результат сложения:");
console.table(res);


function createMatrix(rows, collumns) {
    const Matrix = [];

    for (let i = 0; i < rows; i++) {
        Matrix[i] = [];
        for (let j = 0; j < collumns; j++) {
            Matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }

    return Matrix;
}


const MatrixByParameters = createMatrix(3, 4); //колво строк и столбцов

console.log("Сгенерированная матрица с указанными размерами:");
console.table(MatrixByParameters);


function CreateSquareMatrix(rows) {
    const Matrix = [];

    for (let i = 0; i < rows; i++) {
        Matrix[i] = [];
        for (let j = 0; j < rows; j++) {
            Matrix[i][j] = Math.floor(Math.random() * 10); // случайное число от 0 до 9
        }
    }

    return Matrix;
}

function CheckDiagonals(Matrix) {
    const size = Matrix.length;
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < size; i++) {
        sumFirstDiagonal += Matrix[i][i];
        sumSecondDiagonal += Matrix[i][size - 1 - i];
    }

    console.log("Сгенерированная матрица:");
    console.table(Matrix);

    console.log("Сумма элементов первой диагонали:", sumFirstDiagonal);
    console.log("Сумма элементов второй диагонали:", sumSecondDiagonal);

    return sumFirstDiagonal === sumSecondDiagonal;
}

const matrixSize = 4;
let Matrix = CreateSquareMatrix(matrixSize);

while (!CheckDiagonals(Matrix)) {
    console.log("Суммы диагоналей не равны. Повторяем генерацию.");
    Matrix = CreateSquareMatrix(matrixSize);
}

console.log("Успешно сгенерирована матрица с равными суммами диагоналей!");

var x = parseFloat(12.2);
var y = parseFloat(4);
var R = parseFloat(4.2);

var S = Math.sqrt(x * x + y * y);

if (S <= R) {
    console.log("Точка находится внутри окружности.");
} else {
    console.log("Точка находится вне окружности.");
}
