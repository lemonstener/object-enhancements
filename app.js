

const createInstructor = (firstName, lastName) => {
    return {
        firstName, lastName
    }
}

const favoriteNumber = 42;
const instructor = 'colt';

const obj = {
    instructor, favoriteNumber: 'this is my favorite!'
}

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

const createAnimal = (species, verb, noise) => {
    return {
        species, [verb]() { return noise }
    }
}

const d = createAnimal('dog', 'bark', 'woof');
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");