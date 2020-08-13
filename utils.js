exports.sort_each_listing = (pizza_order) => {
    return pizza_order.toppings.map((x) => x.toLowerCase()).sort();
}

exports.add_to_compiled_list_totals = (ingredients, generated_list) => {
    let list_copy = [...generated_list];
    for (let index in list_copy) {
        if (JSON.stringify(list_copy[index].ingredients) === JSON.stringify(ingredients)) {
            list_copy[index].count++
            return list_copy
        }
    }
    list_copy.push({ingredients: ingredients, count: 1});
    return list_copy;
}

exports.list_by_descending_order = (a, b) => parseInt(b.count) - parseInt(a.count);

exports.get_first = (count, list) => {
    let list_copy = [];
    for (let i = 0; i < count; i++) {
        list_copy.push(list[i]);
    }
    return list_copy;
}


