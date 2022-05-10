const findTheOldest = function (people) {
    return people.reduce(function (prevPerson, currentPerson) {
        const oldestAge = getAge(prevPerson.yearOfBirth, prevPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge > currentAge ? prevPerson : currentPerson;
    });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
