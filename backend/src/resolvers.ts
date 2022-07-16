// resolver logic

export const resolvers = {
    Query: {
        drivers: () => drivers
    },
};


const drivers = [
    {
        "id": 1,
        "name": "Emanuel",
        "username": "emanu123",
        "email": "emanu@gmail.com"
    },
    {
        "id": 2,
        "name": "Dina",
        "username": "dins62",
        "email": "dinac@gmail.com"
    },
    {
        "id": 3,
        "name": "Nuno",
        "username": "nunss69",
        "email": "nuns@hotmail.com"
    },
];