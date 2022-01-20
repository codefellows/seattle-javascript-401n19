const Hashmap = require('./util/hashmap');



function leftJoin(hm1, hm2) {
  let structuredValues = recorder(hm1);
  // first function recorder -> returns array of hm1 values
  // LEFT JOIN -> all values in first hashmap are recorded.
  structuredValues.map((el) => {
    let item = hm2.get(el.key)
    // console.log(item, el);
    if (item) {
      el.keyMatchValue = item
    }
  });
  // then the second hashmap is iterated through looking for keys that match keysfrom hm1
  // I could keep track of all keys in hm1 in an array then just loop while running .get on hm2
  // if I get a match, I can just add it to the corresponding key in the data structure

  console.log('StructuredValues', structuredValues);
  return structuredValues
}

function recorder(hm) {
  let result = [];
  hm.map.forEach((data, i) => {
    data.values().map((el) => {
      // result.push([Object.keys(el)[0], Object.values(el)[0]])
      let item = {
        key: Object.keys(el)[0],
        value: Object.values(el)[0],
        keyMatchValue: null
      }
      result.push(item);
    })
  });
  return result;
  // -------------- RETURN ---------------- //
  /*
    [
      { key: 'diligent', value: 'employed', keyMatchValue: null },
      { key: 'outfit', value: 'garb', keyMatchValue: null },
      { key: 'fond', value: 'enamored', keyMatchValue: null },
      { key: 'guide', value: 'usher', keyMatchValue: null },
      { key: 'wrath', value: 'anger', keyMatchValue: null }
    ]
  */
}






// ---------------- Create hash ---------------- //

let synHash = new Hashmap(1024);
synHash.set('diligent', 'employed');
synHash.set('fond', 'enamored');
synHash.set('guide', 'usher');
synHash.set('outfit', 'garb');
synHash.set('wrath', 'anger');

let antHash = new Hashmap(1024);
antHash.set('diligent', 'idle');
antHash.set('fond', 'averse');
antHash.set('guide', 'follow');
antHash.set('flow', 'jam');
antHash.set('wrath', 'delight');

leftJoin(synHash, antHash);