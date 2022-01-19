const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased() {
  return tutorials.map(title => {
  const splitSentences = title.split(" ")
    const upCasedWords = splitSentences.map((word, index) => {
      const newWord = word[0].toUpperCase() + word.slice(1)
      return newWord
    })
    return upCasedWords.join(" ")
  })
}
  //each element of tutorials needs to be cap//

  //map through each sentence-split the sentence by space

  //map through each word-slice 0,1
  //upcase the first character

