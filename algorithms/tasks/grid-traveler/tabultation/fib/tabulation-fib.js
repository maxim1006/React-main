const fib = n => {
    // создаю массив с длинной на 1 больше входных данных и заполняю 0ми
    const table = new Array(n + 1).fill(0);

    // знаем что на позиции 1 фибоначчи = 1
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        // к следующим 2м числам прибавляю текущее
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
};

// time O(n), space O(n)
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025