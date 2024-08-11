// Item Class
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Inventory Management Functions

// Add Item
function addItem(inventory, item) {
    inventory.push(item);
}

// Update Item
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    }
}

// Delete Item
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

// Additional Utility Functions

// Get Item
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Print Inventory
function printInventory(inventory) {
    console.log(inventory.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
    })));
}

// Main Program

// Initialize the inventory
let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.3)
];

console.log("Initial Inventory:");
printInventory(inventory);

// Adding an item
const orange = new Item(3, 'Orange', 15, 0.7);
addItem(inventory, orange);
console.log("\nAdding item:");
printInventory(inventory);

// Updating an item
updateItem(inventory, 1, { quantity: 12, price: 0.6 });
console.log("\nUpdating item:");
printInventory(inventory);

// Deleting an item
deleteItem(inventory, 2);
console.log("\nDeleting item:");
printInventory(inventory);

// Getting a specific item
const item = getItem(inventory, 3);
console.log("\nGetting item:", item);
