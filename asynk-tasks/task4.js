function createDynamicPromise(ms) {
    return new Promise(resolve => setTimeout(() => resolve(`Завершено через ${ms} мс`), ms));
}

async function task4(numbers) {
    const promises = numbers.map(createDynamicPromise);
    const results = await Promise.all(promises);
    results.forEach(result => console.log(result));
}

module.exports = task4;
