const crypto = require('crypto');

function deterministicRandom(hex) {
  const hash = crypto.createHash('sha256').update(hex).digest('hex');
  const number = parseInt(hash, 16);
  const randomNumber = number % 1240;
  
  return randomNumber;
}

console.log(deterministicRandom("b9a272dbc8d3bf3a481e0199873d272755a4049d"));
console.log(deterministicRandom("b9a272dbc8d3bf3a481e0199873d272755a4049d"));

console.log(deterministicRandom("06079982a58dad694e01a25b3493f2b22974d44b"));
