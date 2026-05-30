
const vCardsMemory = []; 

async function create(contact) {

    vCardsMemory.push(contact);

    console.log(" fun(): contact saved in RAM.");
}

async function find() {
    return vCardsMemory;
}

async function swapContacts(jsonData) {

    vCardsMemory.length = 0;
    vCardsMemory.push(...jsonData);

    console.log(" fun(): swapped new contacts list in RAM.");
}

async function deleteContact() {
    console.log("fun(): delete in RAM (in dev)");
}

module.exports = { create, find, swapContacts, deleteContact };