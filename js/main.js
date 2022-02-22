const getCheck = (number) => number<0 ? -1 : number;

getCheck(1);

const getRandInt = (min,max) => Math.floor(Math.random()*(max-min+1)) + min;

const getRantDir = (min,max) => min>max ? getRandInt(max,min) : getRandInt(min,max);

const getIntRand = (num1,num2) =>  (getCheck(num1) && getCheck(num2)) === true ? getRantDir(num1 , num2) :-1;


getIntRand(1,2);

const getCoordinates = (num1,num2,numSig) => {
  num1=num1*Math.pow(10, numSig);
  num2=num2*Math.pow(10, numSig);
  const rez = ( !(getCheck(num1) && getCheck(num2)) === -1) ? -1 : getRandInt(num1 , num2);
  return rez/Math.pow(10, numSig);
};

getCoordinates(1,2,3);
//В работе использовались материалы  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const  getRandArbit = (min, max) =>  Math.random() * (max - min+1) + min;

const getRantArbitDir = (min,max) => min>max ? getRandArbit(max,min) : getRandArbit(min,max);

const getRantArbitDirCheck = (num1,num2) =>  (getCheck(num1) && getCheck(num2)) === true ? getRantArbitDir(num1,num2) : -1;

const getCoordinates2 = (strt,nd,numSig) => (getRantArbitDirCheck(strt,nd)*Math.pow(10, numSig)%1)/Math.pow(10, numSig);

getCoordinates2(1,2,3);
//Получилось 2 варианта решения. И да самое сложное придумать название
