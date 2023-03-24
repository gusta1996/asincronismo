function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen(); // "Generator { }"

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* interate(array) {
    for ( let value of array) {
        yield value;
    }
}

const it = interate(['Yoel', 'Gustavo', 'Anthony', 'Esteban', 'Luis']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);