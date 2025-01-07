const translate = (word) => {
    const vowels = "aeiou";
    const lowerCaseWord = word.toLowerCase();

    if (vowels.includes(lowerCaseWord[0])) {
        return `${lowerCaseWord}way`;
    }

    let vowelPosition = 0;
    for (let i = 0; i < lowerCaseWord.length; i++) {
        if (vowels.includes(lowerCaseWord[i])) {
            vowelPosition = i;
            break;
        }
    }

    const consonantCluster = lowerCaseWord.substring(0, vowelPosition);
    const restOfWord = lowerCaseWord.substring(vowelPosition);
    return `${restOfWord}${consonantCluster}ay`;
};

module.exports = translate;
