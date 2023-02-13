// sort the nouns
const food = [
    "apple",
    "banana",
    "blueberry",
    "burger",
    "dragonfruit",
    "durian fruit",
    "eggroll",
    "fruit",
    "grape",
    "ice cream cone",
    "orange",
    "pineapple",
    "poutine",
    "taco",
    "starfruit",
    "steamed ham",
    "waffle",
    "wrap"
];

const animals = [
    "alligator",
    "animal",
    "ant",
    "axolotl",
    "bird",
    "bug",
    "bull",
    "cat",
    "cattle",
    "chicken",
    "clam",
    "cow",
    "crocodile",
    "dinosaur",
    "dog",
    "donkey",
    "dolphin",
    "dragon",
    "fish",
    "gorilla",
    "horse",
    "insect",
    "monkey",
    "mouse",
    "pig",
    "rat",
    "spider",
    "tardigrade",
    "unicorn",
    "whale"
];

const people = [
    "boss",
    "employee",
    "doctor",
    "imposter",
    "lawyer",
    "office worker",
    "person",
    "pro",
    "professor",
    "scientist",
    "student",
    "noob",
    "teacher"
];

const objects = [
    "backpack",
    "cellphone",
    "computer",
    "gun",
    "movie",
    "remote",
    "rifle",
    "screen",
    "TV"
];

// singular countable nouns only
export const nouns = [
    ...food,
    ...animals,
    ...people,
    ...objects
];
