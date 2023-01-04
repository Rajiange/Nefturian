//Version sans la lib crypto 
function linkBetweenCreatureNefturain(hex) {
    let seedgenerator = Math.sin(hex) * 10000;
    let Nefturian = Math.floor((seedgenerator - Math.floor(seedgenerator)) * 1240);
    
    return Nefturian;
}
console.log(linkBetweenCreatureNefturain(0xb9a272dbc8d3bf3a481e0199873d272755a4049d));
console.log(linkBetweenCreatureNefturain(0xb9a272dbc8d3bf3a481e0199873d272755a4049d));
console.log(linkBetweenCreatureNefturain(0xabe723aa2bab651b036f836d198299aea91586e7));  