import { generateSentence } from "./generators.js";

// split based on "," delimiter, but ALSO account for ", "
const extractUserWords = userString => {
    if (userString === '') {
        return [];
    } else {
        const tokens = userString.split(',');
        return tokens.map(token => token.trim());
    }
};

const button = document.getElementById("generate");
const sentenceDiv = document.getElementById("sentence");

const userNouns = document.getElementById("nouns");
const userTransitiveVerbs = document.getElementById("transverbs");
const userIntransitiveVerbs = document.getElementById("intransverbs");
const userDitransitiveVerbs = document.getElementById("ditransverbs");
const userAdjectives = document.getElementById("adjectives");
const userAdverbs = document.getElementById("adverbs");

button.addEventListener("click", () => {
    // get all the user's own words
    const userWords = {
        "nouns": extractUserWords(userNouns.value),
        "transVerbs": extractUserWords(userTransitiveVerbs.value),
        "intransVerbs": extractUserWords(userIntransitiveVerbs.value),
        "ditransVerbs": extractUserWords(userDitransitiveVerbs.value),
        "adjectives": extractUserWords(userAdjectives.value),
        "adverbs": extractUserWords(userAdverbs.value)
    };
    sentenceDiv.innerHTML = generateSentence(userWords);
});