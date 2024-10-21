const task1 = require('./task1');
const task2 = require('./task2');
const task3 = require('./task3');
const task4 = require('./task4');

async function main() {
    console.log('Задание 1:');
    await task1();

    console.log('\nЗадание 2:');
    await task2(['hello', 'world', 'async', 'await']);

    console.log('\nЗадание 3:');
    await task3();

    console.log('\nЗадание 4:');
    await task4([1000, 2000, 1500]);
}

main().catch(err => console.error(err));
