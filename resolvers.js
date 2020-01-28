const people = [
    {
        id : 0
        , name: "Sherlock Holmes"
        , job : "private detective"
        , gender : "male"
    }
    , {
        id : 1
        , name : "John Watson"
        , job : "army doctor"
        , gender : "male"
    }
];

const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

const resolvers = {
    Query : {
        people: () => people
        , person: (_, args) => getById(args.id)
        // , person : (_, { id }) => getById(id)
    }
};

export default resolvers;