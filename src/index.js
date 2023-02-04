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

window.onload = () => {
    const button = document.getElementById("generate");
    const sentenceDiv = document.getElementById("sentence");
    
    const userNouns = document.getElementById("nouns");
    const userVerbs = document.getElementById("verbs");
    const userAdjectives = document.getElementById("adjectives");
    const userAdverbs = document.getElementById("adverbs");

    button.addEventListener("click", () => {
        // get all the user's own words
        const userWords = {
            "nouns" : extractUserWords(userNouns.value),
            "verbs" : extractUserWords(userVerbs.value),
            "adjectives" : extractUserWords(userAdjectives.value),
            "adverbs" : extractUserWords(userAdverbs.value)
        };
        sentenceDiv.innerHTML = generateSentence(userWords);
    });
};