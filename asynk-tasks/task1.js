function createPromise(delay, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

async function task1() {
    const results = [];
    results.push(await createPromise(1000, 'Первый промис выполнен'));
    results.push(await createPromise(2000, 'Второй промис выполнен'));
    results.push(await createPromise(1500, 'Третий промис выполнен'));
    
    results.forEach(result => console.log(result));
}

module.exports = task1;
