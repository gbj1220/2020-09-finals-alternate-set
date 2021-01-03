// Your code goes below:
const fizzBuzzSingleNumber = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz"
  } else if (num % 3 === 0) {
    return "Fizz"
  } else if (num % 5 === 0) {
    return "Buzz"
  }
}
const yellAll = (strArr) => {
  const newArr = []
  for (const str of strArr) {
    const result = str.toUpperCase()
    newArr.push(result)
  }
  return newArr
}

const triStateArea = (citiesArr) => {
  const newArr = []
  for (const city of citiesArr) {
    
    if (city.endsWith('NY') || city.endsWith('CT')  || city.endsWith('NJ')) {
      newArr.push(city)
    }
  } return newArr
}

const uppercaseCount = (strings) => {
  const newArr = []
  for (const str of strings) {
    if (str.toUpperCase() === str) {
      newArr.push(str)
    }
    } return newArr.length
}

const containsDigit = (strings) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  for (const str of strings) {
    if (!str.includes(letters)) {
      return true
    } else if (!str.includes(letters)) {
      return false
    } else if (str = NaN) {
      return true
    }
  }
}

const containsLowerCase = (str) => {
  if (str.toLowerCase()) {
    return true
  } else if (!str.toLowerCase()) {
    return false
  }
}

const containsUpperCase = (str) => {
  if (str.toLowerCase() && !str.toUpperCase()) {
    return false
  } else if (str.toUpperCase()) {
    return true
  } else if (str.toUpperCase()) {
    return false
  } else if (!str.toUpperCase()) {
    return false
  } else if (str.toLowerCase()) {
    return true
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof fizzBuzzSingleNumber === "undefined") {
  fizzBuzzSingleNumber = undefined;
}

if (typeof yellAll === "undefined") {
  yellAll = undefined;
}

if (typeof triStateArea === "undefined") {
  triStateArea = undefined;
}

if (typeof uppercaseCount === "undefined") {
  uppercaseCount = undefined;
}

if (typeof containsSpace === "undefined") {
  containsSpace = undefined;
}

if (typeof containsDigit === "undefined") {
  containsDigit = undefined;
}

if (typeof containsLowerCase === "undefined") {
  containsLowerCase = undefined;
}

if (typeof containsUpperCase === "undefined") {
  containsUpperCase = undefined;
}

if (typeof containsNonAlphanumeric === "undefined") {
  containsNonAlphanumeric = undefined;
}

if (typeof isValidPassword === "undefined") {
  isValidPassword = undefined;
}

if (typeof getToBed === "undefined") {
  getToBed = undefined;
}

if (typeof digits === "undefined") {
  digits = undefined;
}

module.exports = {
  fizzBuzzSingleNumber,
  yellAll,
  triStateArea,
  uppercaseCount,
  containsSpace,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  isValidPassword,
  getToBed,
  digits,
};
