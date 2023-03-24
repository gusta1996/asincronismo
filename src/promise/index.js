const promise = new Promise(function(resolve, reject){
    resolve('Hola ISTJ')
});
// Promesa tiene 3 estados: Pendiente, cumplido, rechazado
const vacas = 9;
const contarVacas = new Promise(function(resolve, reject) {
    if (vacas > 10) {
        resolve(`Tiene ${vacas} vacas en la granja`);
    } else {
        reject('No tienes la cantidad suficiente de vacas en la granja');
    }
})

contarVacas.then((result)=> {
    console.log(result);
}).catch((error)=> {
    console.log(error);
}).finally(()=>console.log('Fin de la promesa'))