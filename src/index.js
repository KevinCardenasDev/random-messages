const messages = [
    "Kevin",
    "Joha",
    "Rafa",
    "Eri",
    "Eirck",
    "Carolina",
    "Paula"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg }