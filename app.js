var people = [
    { 
        // the John object
        firtsname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main st.',
            '222 Third st.'
        ]
    },
    {
        // the Jane object
        firtsname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main st.',
            '444 Fifth st.'
        ],
        greet: function () {
            return 'Hello!';
        }
    }
]

console.log(people);