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
        [determiner, adjectivePhrase, noun]
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
        [adverb, verb, nounPhrase]
    ];
    const chosenFormat = choose(formats);
    return chosenFormat.map(constituent => constituent()).join(' ');
};

export const sentence = userw => {
    userWords = userw;
    return nounPhrase() + " " + verbPhrase() + '.';
};