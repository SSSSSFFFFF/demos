var invertTree = function (root) {
    const loop = (tree) => {
        if (!tree) {
            return;
        }
        if (tree.left === null && tree.right === null) {
            return;
        } else {
            loop(tree.left ? tree.left : null);
            loop(tree.right ? tree.right : null);

            let middle = tree.left;
            tree.left = tree.right;
            tree.right = middle;
        }
    }
    loop(root);
    return root;
};
invertTree([4, 2, 7, 1, 3, 6, 9])
