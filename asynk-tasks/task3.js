function createErrorPromise() {
    return new Promise((_, reject) => setTimeout(() => reject('Ошибка в промисе!'), 1000));
}

async function task3() {
    const promises = [
        Promise.resolve('Первый промис выполнен'),
        Promise.resolve('Второй промис выполнен'),
        createErrorPromise()
    ];

    try {
        const results = await Promise.all(promises);
        results.forEach(result => console.log(result));
    } catch (error) {
        console.error(error);
    }
}

module.exports = task3;
