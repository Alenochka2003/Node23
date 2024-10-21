function asyncToUpperCase(str) {
    return new Promise(resolve => setTimeout(() => resolve(str.toUpperCase()), 1000));
}

async function task2(strings) {
    const promises = strings.map(asyncToUpperCase);
    const results = await Promise.all(promises);
    results.forEach(result => console.log(result));
}

module.exports = task2;
