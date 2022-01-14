const Hashmap = require('./util/hashmap');

// need to split on empty space and take into account punctuation
function repeatedWord(string) {
  let newString = string.match(/[^_\W]+/g).join(' '); // .toLowerCase()
  let hm = new Hashmap(1024);
  let arr = newString.split(" ");
  for (el of arr) {
    // go through entire array of strings
    // hash each value
    // check to see if there is a hashed value
    // if same value is returned, return that string
    // otherwise, if undefined or a string is returned then continue on
    let check = hm.get(el);
    if (el === check) {
      console.log('Dupes', el);
      res = el;
      break;
    }
    hm.set(el, el)
  }
  console.log(res)
  return res;
}


let string1 = "Once upon a time, there was a brave princess who"
let string2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only";
let string3 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York";

repeatedWord(string1);
repeatedWord(string2);
repeatedWord(string3);
