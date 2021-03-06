# 2020-09 Alternate Finals

### General Tips

- **You can absolutely research your JavaScript.** You don't have to have how `.slice` works memorized. It may worm its way into your brain eventually, but for many developers, they don't want to or can't memorize code; it's always a friendly internet search away, right?
- This is a very challenging set of exercises, and **you are not expected to finish**. Don't get discouraged!
- Make sure you read through each problem carefully (here and in the tests themselves) and pay attention to your terminal's output to see what was the function's expected output and what was received. Better to spend a couple minutes being sure you understand each problem than waste fifteen minutes or more on a misunderstanding of the problem!
- **You can go in any order.** Don't stare at one problem for too long! Each problem 1/4 of the way completed tells us more about how you're doing than one problem 3/4 completed.
- You can also do the tests **within** a problem in any order. **Think of each check-mark as an individual question.** These sub-problems are often dealing with different kinds of inputs, and really are unique challenges even within their problem. Celebrate when you get one, and when you don't, move on to the next.
- And if you're halfway through the problem and feeling stuck, **move on**. You don't have to get an exercise's whole set of tests green.
- Relax and have fun. Here are your tasks, and we'll see you on the other side!

### An Important Note On `isValidPassword`

The FIVE problems before it, from `containsDigit` to `containsSpace`, are helper functions for `isValidPassword`, with the tests for them provided **for your benefit only**. That means that **they are not graded**. The tests will help you know for sure that each sub-problem (like, "Does a string contain a space?") is functioning correctly, so at the end you can worry only about combining them, not the individual parts.

Again: `isValidPassword` will be graded, but the following will NOT:

- `containsDigit`
- `containsLowerCase`
- `containsUpperCase`
- `containsNonAlphanumeric`
- `containsSpace`

### Tasks

##### `fizzBuzzSingleNumber`

**Description**

Given a number, returns the string `Fizz` if it's evenly divisible by `3`, `Buzz` if it's evenly divisible by `5`, `FizzBuzz` if it's evenly divisible by both, and the original number if it's divisible by neither.

**Examples**

```javascript
fizzBuzzSingleNumber(1); // --> 1
fizzBuzzSingleNumber(2); // --> 2
fizzBuzzSingleNumber(3); // --> Fizz
fizzBuzzSingleNumber(4); // --> 4
fizzBuzzSingleNumber(5); // --> Buzz
fizzBuzzSingleNumber(15); // --> FizzBuzz
```

**Hints**

There are a few different ways to tackle the logic, but the key is structuring your logic so that a number divisible by BOTH `3` and `5` doesn't end up triggering JUST `Fizz` or `Buzz`. There are some neat solutions involving string-building or short-circuiting logic chains by returning from the function, but an `if/if else` chain is the simplest, andt simplest is probably best when you just need a green check-mark.

---

##### `yellAll`

**Description**

Capitalizes each letter in each string in the given array.

**Examples**

```javascript
yellAll(["hello there", "ahoy", "greetings"]); // --> ["HELLO THERE", "AHOY", "GREETINGS"]
yellAll(["good-bye", "forever", "my lovely"]); // --> ["GOOD-BYE", "FOREVER", "MY LOVELY"]
```

**Hints**

This is a map operation, so whether you're using `.map` or a manual loop, you want to be pushing a transformed version of each string into an array (and then returning it).

---

##### `triStateArea`

**Description**

Given an array of strings representing cities with their states, returns an array of only those places whose state is "NY" or "NJ" or "CT" (also known as "the Tri-State Area").

**Description**

```javascript
triStateArea([
  "Brooklyn, NY",
  "Stamford, CT",
  "Boston, MA",
  "Buffalo, NY",
  "Los Angeles, CA",
]);

// --> ["Brooklyn, NY", "Stamford, CT", "Buffalo, NY"]
triStateArea([
  "bridgeport, ct",
  "portland, or",
  "newark, nj",
  "seattle, wa",
  "northampton, ma",
]);

// --> ["bridgeport, ct", "newark, nj"]

triStateArea([
  "Brooklyn, NY",
  "Stamford, CT",
  "Acton, OH",
  "Buffalo, NY",
  "Spiny Toad, TX",
]);

// --> ["Brooklyn, NY", "Stamford, CT", "Buffalo, NY"]
```

`
**Hints**

- This is a filter operation, so whether you're using `.filter` or a manual loop, make sure you're checking each value in the original array and only pushing a value in to the array you'll return if that value meets our criteria.
- You'll need to check if the string ends with ANY ONE of `NY` or `NJ` or `CT`; it doesn't need to (nor can it!) end with all three. Watch those ORs and ANDs!
- The second and third tests for this function are a little more difficult, and could be skipped if you don't want to spend time researching them in favor of simpler problems.
- That said, for case insensitivity, you'll just want to make sure you're either checking against both case options (e.g., `NY` and `ny`), or changing the case for checking purposes (making sure to push the non-transformed version in if it's a match!).
- And for making sure that `Acton, OH` doesn't match (the `ct` is in the middle of the string), there is a built-in string method that checks whether a string ends with a given substring.

---

##### `uppercaseCount`

**Description**

Returns a count of strings in the given array that are entirely uppercased.

**Examples**

```javascript
uppercaseCount([
  "lorem",
  "IPSUM",
  "dolor",
  "SIT",
  "AMET",
  "CONSECTETUR",
  "adipiscing",
  "elit",
]);
// --> 4

uppercaseCount([
  "Lorem",
  "IPSUM",
  "dOlor",
  "SIT",
  "AMeT",
  "CONSECTETUR",
  "adipiscing",
  "elit",
]);
// --> 3
```

**Hints**

- This is a reduce operation, so whether you use `.reduce` or a manual loop (and I would ALWAYS recommend a manual loop over `.reduce` for anyone but an advanced coder), you're iterating over a list and returning ONE value alone, NOT an array.
- In order to check if a string is in a particular case, you can convert the string to that case, and then check it against the original version. If they're the same, then no actual conversion happened, so they were already in that case. Neat, huh?

---

##### `isValidPassword`

**Description**

Returns `true` if the given string contains a lowercase letter, an uppercase letter, a digit, a non-alphanumeric character, and no spaces. Returns `false` otherwise.

**Examples**

```javascript
// No uppercase letters:
isValidPassword("jelly22fi$h"); // --> false
// No lowercase letters:
isValidPassword("JELLY22FI$H"); // --> false
// No digits:
isValidPassword("Usher!"); // --> false
// no non-alphanumeric characters:
isValidPassword("Passw0rd"); // --> false
// DOES have spaces:
isValidPassword("Passw0rd #(@$"); // --> false
// valid passwords (at least one uppercase and lowecase letter, a digit, a non-alphanumeric character, and no spaces):
isValidPassword("Lov3MyP!ano"); // --> true
isValidPassword("1Ki77$"); // --> true
isValidPassword("a11Black$"); // --> true
isValidPassword("BankLogin!3"); // --> true
```

**Hints**

- See the note in the section "An Important Note On `isValidPassword`" near the top of this README.
- Non-alphanumeric means any character that is neither a letter of the alphabet nor a digit. So `$` and `-` are non-alphumeric, while `a` and `B` and `0` and `5` are NOT.
- Remember that we want a password that DOES contain something for most cases, like a digit or an uppercase letter. But for spaces, we want to make sure it does NOT contain that character.

---

##### `getToBed`

**Description**

Returns the original people but with everyone awake between 1am and 4am set to asleep.

**Examples**

```javascript
getToBed([
  {
    name: "Colin",
    localTime: 730,
    asleep: false,
  },
  {
    name: "Alice",
    localTime: 130,
    asleep: false,
  },
  {
    name: "Evelyn",
    localTime: 200,
    asleep: true,
  },
  {
    name: "William",
    localTime: 330,
    asleep: false,
  },
  {
    name: "Ivy",
    localTime: 1450,
    asleep: true,
  },
]);
/* --> [
      {
        name: "Colin",
        localTime: 730,
        asleep: false,
      },
      {
        name: "Alice",
        localTime: 130,
        asleep: true,
      },
      {
        name: "Evelyn",
        localTime: 200,
        asleep: true,
      },
      {
        name: "William",
        localTime: 330,
        asleep: true,
      },
      {
        name: "Ivy",
        localTime: 1450,
        asleep: true,
      },
    ]
    */
```

**Hints**

- This is a map operation, so whether you're using `.map` or a manual loop, you want to be pushing a transformed version of each object into an array (and then returning it).
- Note that those whose local time is NOT between 1am and 4am should be left to their own devices. They can be asleep or not; they are put into your resulting array unchanged.
- So this is a big one, and one you may not have known: when you access an object in an array and make a change to that object (say, changing its `asleep` attribute to `true`), you are changing it in the original array. In the example given above, there's only one "Alice" object in the array, and JavaScript doesn't copy things without you asking for it.

  Let's look at some examples.

```javascript
const doggy1 = { name: "Ralph", isAGoodDogYesHeIs: true };
doggy1.name = "Gandalf";
doggy1; // --> { name: "Gandalf", isAGoodDogYesHeIs: true }

const doggy2 = { name: "Waldo", isAGoodDogYesHeIs: true };
const doggies1 = [];
const doggies2 = [];
doggies1.push(doggy2);
doggies2.push(doggy2);
doggy2.isAGoodDogYesHeIs = false;
doggies1; // --> [{ name: "Waldo", isAGoodDogYesHeIs: false }]
doggies2; // --> [{ name: "Waldo", isAGoodDogYesHeIs: false }]

const doggy3 = { name: "Biff", isAGoodDogYesHeIs: true };
const doggies3 = [];
const doggies4 = [];
doggies3.push(doggy3);
doggies4.push(doggy3);
doggies3[0].name = "Bamf";
doggies4; // --> [{ name: "Bamf", isAGoodDogYesHeIs: true }]
```

So! If, while iterating over the original array, you change the object you're dealing with to set its `asleep` to `true`, the original array will also have its object's property changed. Not through some arcane psychic link between the two, but because there aren't two objects at all. They're the same object!

What's the solution here? Make a new object, copy over the attributes, change what you need to change if anything, and THEN get that NEW object into the resulting array (whether through `.map` or a loop).

---

##### digits

**Description**

Turns a positive number into an array of its digits, ignoring negative signs and decimal points.

**Examples**

```javascript
digits(12350); // --> [1, 2, 3, 5, 0]
digits(-12350); // --> [1, 2, 3, 5, 0]
digits(4.04); // --> [4, 0, 4]
```

**Hints**

- This is harder than it sounds.
- Although there might be a mathematical way to do this, it's far simpler to deal with the numbers as _characters_, which means you'll need a string. But because we are taking in a number and expecting to output an array of numbers, if you go the string route, you'll need to convert numbers to strings and back to numbers.
- If you do decide on the String-Number Conversion Dance, I recommend `.toString()` for converting to strings and `Number` to convert to a number; they're the clearest and simplest methods!
- Make sure you're using those conversion functions/methods correctly. Do your research!
