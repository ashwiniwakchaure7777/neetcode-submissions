class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let col = {};
        let row = {};
        let box = {};

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                let value = board[i][j];
                if (value === ".") continue;
                let boxidx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (row[`${i}-${value}`] || col[`${j}-${value}`] || box[`${boxidx}-${value}`]) {
                    return false;
                }

                row[`${i}-${value}`] = true;
                col[`${j}-${value}`] = true;
                box[`${boxidx}-${value}`] = true;
            }
        }
        return true;
    }
}
