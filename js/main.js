
const getIntRandom = (num1,num2) => {
  const getCheck = (number) => number<0 ? 0 : number;
  const getRandomInt = (min,max) => Math.floor(Math.random()*(max-min+1)) + min;
  const getRandomDir = (numA,numB) => numA>numB ? getRandomInt(numB,numA) : getRandomInt(numA,numB);
  const rez=(getCheck(num1) && getCheck(num2)) === true ? getRandomDir(num1 , num2) :-1;
  return rez;
};

getIntRandom(1,2);

//В работе использовались материалы  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getCoordinates = (strt,nd,numSig) => {
  const getCheck = (number) => number<0 ? 0 : number;
  const getRandomArbitrary = (min,max) => (Math.random()*(max-min+1)) + min;
  const getRandomDir = (numA,numB) => numA>numB ? getRandomArbitrary(numB,numA) : getRandomArbitrary(numA,numB);
  const rez=(getCheck(strt) && getCheck(nd) && getCheck(numSig) && numSig<21) === true ? getRandomDir(strt , nd) :-1;
  return rez.toFixed(numSig);
};


getCoordinates(1,2,3);
//Получилось 2 варианта решения. И да самое сложное придумать название
