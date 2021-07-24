function inorderTraversal(root) {
    let stack = [];
    let list = [];
    while (!stack.length || root !== null) {
        if (root !== null) {
            stack.push(root);
            root = root.left;
            continue;
        }
        root = stack.pop();
        list.push(root);
        root = root.right;
    }
    return stack;
}