import { nouns } from "./wordClasses/nouns.js";
import { transVerbs, intransVerbs, ditransVerbs } from "./wordClasses/verbs.js";
import { adjectives } from "./wordClasses/adjectives.js";
import { adverbs } from "./wordClasses/adverbs.js";

let userWords;

// helper function to choose a random element in a list
const choose = list => list[Math.floor(Math.random() * list.length)];

// constituent generators
const noun = () => choose([...nouns, ...userWords.nouns]);
const adjective = () => choose([...adjectives, ...userWords.adjectives]);
const determiner = () => choose(["a", "the", "this", "that"]);
const adverb = () => choose([...adverbs, ...userWords.adverbs]);
const preposition = () => choose(["on", "above", "below", "to the left of", "to the right of", "beside", "in front of", "behind"]);

// the verbs
const transVerb = () => choose([...transVerbs, ...userWords.transVerbs]);
const intransVerb = () => choose([...intransVerbs, ...userWords.intransVerbs]);
const ditransVerb = () => choose([...ditransVerbs, ...userWords.ditransVerbs]);

const ditransIndirectClause = () => "to " + nounPhrase();
const prepPhrase = () => preposition() + " " + nounPhrase();

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
        [transVerb, nounPhrase],
        [adverb, transVerb, nounPhrase],
        [transVerb, nounPhrase, adverb],
        [intransVerb],
        [adverb, intransVerb],
        [intransVerb, adverb],
        [ditransVerb, nounPhrase, ditransIndirectClause],
        [adverb, ditransVerb, nounPhrase, ditransIndirectClause],
        [ditransVerb, nounPhrase, ditransIndirectClause, adverb]
    ];
    const chosenFormat = choose(formats);
    return chosenFormat.map(constituent => constituent()).join(' ');
};

const relativeClause = () => {
    const formats = [
        [verbPhrase],
        [nounPhrase, transVerb]
    ];
    const chosenFormat = choose(formats);
    // makes no distinction between "who" and "that"
    const rc = ["that", ...chosenFormat.map(constituent => constituent())];
    return rc.join(' ');
};

const sentence = () => {
    const formats = [
        [nounPhrase, verbPhrase],
        [nounPhrase, verbPhrase, prepPhrase]
    ];
    const chosenFormat = choose(formats);
    return chosenFormat.map(constituent => constituent()).join(' ');
};

export const generateSentence = userw => {
    userWords = userw;
    return sentence() + '.';
};