function exist(board, word) {
    if (!board || !board.length || !word) return false;

    const rows = board.length;
    const cols = board[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(r, c, index) {
        if (index === word.length) return true; 
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || board[r][c] !== word[index]) {
            return false; 
        }

        visited[r][c] = true; 

        const found = dfs(r + 1, c, index + 1) ||
                      dfs(r - 1, c, index + 1) ||
                      dfs(r, c + 1, index + 1) ||
                      dfs(r, c - 1, index + 1);

        visited[r][c] = false; 
        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true; 
            }
        }
    }

    return false; 
}