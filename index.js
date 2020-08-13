const {sort_each_listing: sort_each, add_to_compiled_list_totals: add_to, list_by_descending_order, get_first} = require('./utils');
const fs = require('fs');

const raw_data = fs.readFileSync('pizzas.json');
const pizza_orders = JSON.parse(raw_data);

let compiled_list = [];

for (let individual_array_of_toppings of pizza_orders) compiled_list = add_to(sort_each(individual_array_of_toppings), compiled_list);

compiled_list.sort(list_by_descending_order);
compiled_list = get_first(20, compiled_list);
console.log(compiled_list);
