function arrayToTree(items) {
    const itemMap = {};

    // 先将所有项存储到一个 Map 中
    items.forEach(item => {
        itemMap[item.id] = { ...item };
    });

    // 构建树
    const rootItems = [];

    items.forEach(item => {
        const currentItem = itemMap[item.id];

        if (item.parentId === null) {
            // 如果没有父级节点，说明是根节点
            rootItems.push(currentItem);
        } else {
            // 如果有父级节点，将该项添加到父级节点的 children 数组中
            const parentItem = itemMap[item.parentId];
            if (parentItem) {
                if (!parentItem.children) {
                    parentItem.children = []
                }
                parentItem.children.push(currentItem);
            }
        }
    });

    return rootItems;
}



const items = [
    { id: 1, parentId: null, name: 'Root 1' },
    { id: 2, parentId: 1, name: 'Child 1.1' },
    { id: 3, parentId: 1, name: 'Child 1.2' },
    { id: 4, parentId: 2, name: 'Child 1.1.1' },
    { id: 5, parentId: null, name: 'Root 2' },
    { id: 6, parentId: 5, name: 'Child 2.1' }
];


const tree = arrayToTree(items);
console.log(JSON.stringify(tree, null, 2));
