const {sort_each_listing, add_to_compiled_list_totals, list_by_descending_order, get_first} = require('./utils');

describe("Test sort_each_list()", () => {
    test('should order array of toppings', () => {
        const test_object =
            [
                {
                    "toppings":
                        [
                            "pepPerOni"
                        ]
                },
                {
                    "toppings":
                        [
                            "feta Cheese"
                        ]
                },
                {
                    "toppings": [
                        "saUsage",
                        "bEEf"
                    ]
                },
            ];
        expect(sort_each_listing(test_object[0])).toEqual(['pepperoni']);
        expect(sort_each_listing(test_object[1])).toEqual(['feta cheese']);
        expect(sort_each_listing(test_object[2])).toEqual(['beef', 'sausage']);
    });
});

describe("Test add_to_compiled_list_totals()", () => {
    test('should update list with new data', () => {
        expect(add_to_compiled_list_totals(['pepperoni'], [])).toEqual([{ingredients: ['pepperoni'], count: 1}]);
        expect(add_to_compiled_list_totals(['pepperoni'], [{
            ingredients: ['pepperoni'],
            count: 1
        }])).toEqual([{ingredients: ['pepperoni'], count: 2}]);
    });
});

describe("Test list_by_descending_order()", () => {
    test('should return sort value of objects with count key', () => {
        expect(list_by_descending_order({"count": 21}, {"count": 10})).toEqual(-11)
    });
});

describe("Test get_first()", () => {
    test('should return first 10 and then 20 of array', () => {
        let test_array = [32, 3, 72, 90, 33, 82, 83, 35, 3, 25, 9, 56, 54, 70, 4, 12, 67, 34, 73, 47, 83, 70, 16, 85, 49, 24, 14, 60, 37, 89]
        expect(get_first(10, test_array)).toEqual([32, 3, 72, 90, 33, 82, 83, 35, 3, 25]);
        expect(get_first(20, test_array)).toEqual([32, 3, 72, 90, 33, 82, 83, 35, 3, 25, 9, 56, 54, 70, 4, 12, 67, 34, 73, 47]);
    });
});

