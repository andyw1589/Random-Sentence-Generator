import { nouns } from "./wordClasses/nouns.js";
import { verbs } from "./wordClasses/verbs.js";
import { adjectives } from "./wordClasses/adjectives.js";
import { adverbs } from "./wordClasses/adverbs.js";

let userWords;

const choose = list => list[Math.floor(Math.random() * list.length)];

const noun = () => choose([...nouns, ...userWords.nouns]);
const verb = () => choose([...verbs, ...userWords.verbs]);
const adjective = () => choose([...adjectives, ...userWords.adjectives]);
const determiner = () => choose(["a", "the", "this", "that"]);
const adverb = () => choose([...adverbs, ...userWords.adverbs]);

const nounPhrase = () => {
    const formats = [
        [determiner, noun],
        [determiner, adjectivePhrase, noun],
        [determiner, noun, relativeClause],
        [determiner, adjectivePhrase, noun, relativeClause]
    ];
    const chosenFormat = choose(formats);
    const np = chosenFormat.map(constituent => constituent());

    // replace "a" with "an" if followed by a vowel
    const det = np[0];
    if (det === 'a' && ['a', 'e', 'i', 'o', 'u'].includes(np[1][0])) {
        np[0] = "an";
    }

    return np.join(' ');
};

const adjectivePhrase = () => {
    const formats = [
        [adjective],
        [adverb, adjective]
    ];
    const chosenFormat = choose(formats);
    return chosenFormat.map(constituent => constituent()).join(' ');
};

const verbPhrase = () => {
    const formats = [
        [verb, nounPhrase],
        [adverb, verb, nounPhrase],
        [verb, nounPhrase, adverb]
    ];
    const chosenFormat = choose(formats);
    return chosenFormat.map(constituent => constituent()).join(' ');
};

const relativeClause = () => {
    const formats = [
        [verb],
        [verbPhrase],
        [nounPhrase, verb]
    ];
    const chosenFormat = choose(formats);
    const rc = ["that", ...chosenFormat.map(constituent => constituent())];
    return rc.join(' ');
};

const sentence = () => {
    return nounPhrase() + " " + verbPhrase();
}

export const generateSentence = userw => {
    userWords = userw;
    return sentence() + '.';
};