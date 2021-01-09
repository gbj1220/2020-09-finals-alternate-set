// Your code goes below:
const fizzBuzzSingleNumber = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz"
  } else if (num % 3 === 0) {
    return "Fizz"
  } else if (num % 5 === 0) {
    return "Buzz"
  } else {
    return num
  }
}

const yellAll = (strArr) => strArr.map((str) => str.toUpperCase())

const triStateArea = (citiesArr) => citiesArr.filter((city) => city.toUpperCase().endsWith('NY')
  || city.toUpperCase().endsWith('CT') || city.toUpperCase().endsWith('NJ'))

const uppercaseCount = (str) => str.filter((x) => x.toUpperCase() === x).length

const containsDigit = (strings) => {
  let newArr = []
  const digits = "1234567890"

  for (let str of strings) {
    if (digits.includes(str)) {
      return true
    }
  }
  return false
}

const containsLowerCase = (str) => {
  const alpha = "abcdefghikjlmnopqrstuvwxyz"
  for (const x of str) {
    if (alpha.includes(x)) {
      return true
    }
  }
  return false
}

const containsUpperCase = (str) => {
  const caps = "ABCDEFGHIKJLMNOPQRSTUVWXYZ"
  for (const x of str) {
    if (caps.includes(x)) {
      return true
    }
  }
  return false
}

const containsNonAlphanumeric = (s) => {
  const alphaNumeric = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789"
  for (const x of s) {
    if (!alphaNumeric.includes(x)) {
      return true
    }
  }
  return false
}

const containsSpace = (str) => {
  const space = " "
  for (const x of str) {
    if (space.includes(x)) {
      return true
    }
  }
  return false
}

const isValidPassword = (str) => {
  return (
    containsDigit(str) &&
    containsLowerCase(str) &&
    containsUpperCase(str) &&
    containsNonAlphanumeric(str) &&
    !containsSpace(str)
  )
}

const getToBed = (person) => person.map((x) => {
  if (x.localTime >= 100 && x.localTime <= 400) {
    return {
      name: x.name,
      localTime: x.localTime,
      asleep: true,
    }
  } else {
    return x
  }
})

// const digits = (num) => {
//   num = num.toString()
//   const numsArr = []
//   for (const digit of num) {
//     if (digit !== '-' && digit !== '.') {
//       numsArr.push(Number(digit))
      
//     }
//   }
//   return numsArr
// }

const digits= (num) => num.toString().split('').filter((digits) => digits !== '-' && digits !== '.').map((digits) => Number(digits))

/********************************
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
