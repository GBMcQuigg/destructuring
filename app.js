// 1. 8 / 1846

// 2. 1846 / 1659

// 3. `Your name is Alejandro and you like Purple`
//      `Your name is Melissa and you like Green`
//      `Your name is undefined and you like Green`

// 4. Maya / Marisa / Chi

// 5. "Raindrops on roses" / "whiskers on kittens" / "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"

// 6. 10, 30, 20

var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const nums = ({ a, b } = obj.numbers);

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

/*
  {
      first: "Tom",
      second: "Margaret",
      third: "Allison",
      rest: ["David", "Pierre"]
    }
    */

const raceResults = ([first, second, third, ...others]) => {
  first, second, third, others;
};

raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);
