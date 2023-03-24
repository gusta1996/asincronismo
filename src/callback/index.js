function suma(n1, n2) {
    return n1 + n2;
}
function calculo(n1, n2, callback) {
    return callback(n1, n2);
};
console.log(calculo(5, 6, suma));

setTimeout(function() {
    console.log('Hola')
}, 5000);

function saludo() {
    console.log('Hola'+saludo)
}
setTimeout(saludo, 2000);