function groupAnagrams(strings: Array<string>) {
  const resultObject: { [key: string]: string[] } = {};
  for (let word of strings) {
    let sortedStrings = word.split("").sort().join("");
    if (resultObject[sortedStrings]) {
      resultObject[sortedStrings].push(word);
    } else {
      resultObject[sortedStrings] = [word];
    }
  }
  const result = Object.values(resultObject);
  return result;
}

console.log(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "dddd", "sddd"])
);
