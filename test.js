
function factorial(A,B, S) {
    // 初始化父节点数组，每个字符的父节点初始为自己
    const parent = new Array(26);
    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    // 查找根节点（带路径压缩）
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // 路径压缩
        }
        return parent[x];
    };

    // 合并两个节点
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            // 按字典序较小的作为根
            if (rootX < rootY) {
                parent[rootY] = rootX;
            } else {
                parent[rootX] = rootY;
            }
        }
    };

    // 遍历 A 和 B，合并等价字符
    for (let i = 0; i < A.length; i++) {
        const a = A.charCodeAt(i) - 'a'.charCodeAt(0);
        const b = B.charCodeAt(i) - 'a'.charCodeAt(0);
        union(a, b);
    }

    // 构建结果字符串
    let result = [];
    for (let i = 0; i < S.length; i++) {
        const c = S.charCodeAt(i) - 'a'.charCodeAt(0);
        const root = find(c);
        result.push(String.fromCharCode(root + 'a'.charCodeAt(0)));
    }

    return result.join('');

}
let n = factorial("parker", "morris","parser");
console.log(n); 