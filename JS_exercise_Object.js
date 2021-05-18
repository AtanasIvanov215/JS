const nick = {
    firstName: 'Nick',
    lastName: 'James',
    birthYear: 1990,
    job: 'teacher',
    friends: ['Joe', 'Moe', 'Bob'],
    hasDriverLicence: false,
    // calcAge: function (birthYear) {
    //     return 2049 - birthYear;
    // }

    calcAge: function () {
        this.age = 2049 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, 
        and he has ${this.hasDriverLicence ? 'a' : 'no'} drivers licence`
    }
};

console.log(nick);
console.log(nick.lastName);
console.log(nick['firstName']);

const interested = prompt('What do you want to know? Choose between firstName, Lastname, age and friend');
console.log(nick[interested]);

if (nick[interested]) {
    console.log(nick[interested]);
}
else {
    console.log('Wrong request');
}
nick.location = 'Bulgaria';
nick['twtter'] = '@tweet!nick';
console.log(nick);

console.log(`${nick.firstName} has ${nick.friends.length} friends and his best friend is ${nick.friends[0]}`);
//console.log(nick.age);
//console.log(nick.calcAge(nick.birthYear));

console.log(nick.calcAge());
console.log(nick.age);

console.log(nick.getSummary());

const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    languege: 'bulgarian',
    population: 7000000,
    neighbours: ['serbia', 'greece', 'romania'],
    isIsland: false,
    describe: function () {
        return (`${this.country} has a population of ${this.population} people, 
        ${this['neighbours'].length} neighbours and a capital called ${this.capital}`);
    }
};

console.log(`${myCountry.country} has a population of ${myCountry.population} people, 
${myCountry['neighbours'].length} neighbours and a capital called ${myCountry.capital} and 
it ${myCountry.isIsland ? 'is' : `isn't`} an island`);

console.log(myCountry.describe());



