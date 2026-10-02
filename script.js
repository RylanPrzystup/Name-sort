const testNamesOne = [
    "Cameron Foster",
    "Layla Martinez",
    "Isaac Bennett",
    "Morgan Carter",
    "Adrian Rivera",
    "Chloe Anderson",
    "Xavier Brooks",
    "Emma Thompson",
    "Julian Garcia",
    "Sarah Mitchell",
    "Connor Lee",
    "Mia Johnson",
    "Gabriel Patel",
    "Lily Williams",
    "Aaron Kim",
    "Victoria Nguyen",
    "Dominic Shah",
    "Claire Collins",
    "Benjamin Rodriguez"
];

const testNamesTwo = [
    "Madison Bennett",
    "Elijah Walker",
    "Sophia Carter",
    "Nathan Brooks",
    "Avery Foster",
    "Daniel Martinez",
    "Scarlett Lee",
    "Samuel Anderson",
    "Penelope Garcia",
    "Christopher Williams",
    "Aria Johnson",
    "Thomas Rivera",
    "Evelyn Thompson",
    "Jonathan Patel",
    "Audrey Mitchell",
    "Henry Kim",
    "Stella Nguyen",
    "Andrew Collins",
    "Lucy Rodriguez",
    "Zachary Shah",
    "Olivia Bennett",
    "Marcus Williams",
    "Grace Carter",
    "Noah Foster",
    "Isabella Lee"
];

function compareNames(a, b) {
    const lastNameA = a.trim().split(/\s+/).pop();
    const lastNameB = b.trim().split(/\s+/).pop();

    const lastNameComparison = lastNameA.localeCompare(lastNameB, undefined, {
        sensitivity: "base"
    });

    if (lastNameComparison !== 0) {
        return lastNameComparison;
    }

    return a.localeCompare(b, undefined, { sensitivity: "base" });
}

function alphabetizeNames(firstList, secondList) {
    const combined = [...firstList, ...secondList];
    const sorted = [...combined];

    for (let i = 1; i < sorted.length; i++) {
        let j = i;

        while (j > 0 && compareNames(sorted[j], sorted[j - 1]) < 0) {
            [sorted[j], sorted[j - 1]] = [sorted[j - 1], sorted[j]];
            j--;
        }
    }

    return sorted;
}

const sortedNames = alphabetizeNames(testNamesOne, testNamesTwo);
console.log("The sorted names in array form:", sortedNames);
console.log("The sorted names as a string:", sortedNames.join(", "));