import { v4 as uuidv4 } from 'uuid';

type Item={
    readonly id:string;
    name:string,
    price:number,
    description:string,
    quantity:number
} 

type User={
    readonly id:string,
    name:string,
    age:number,
    cart:Item[]
}

// function createUser({name,age}:{name:string,age:number}):User{
function createUser(name:string,age:number):User{
    const user:User={
        id:uuidv4(),
        name,
        age,
        cart:[]
    }
    return user;
}
       


function createItem(name:string, price:number,description:string,_quantity:number):Item{
   
    const item:Item={
        id:uuidv4(),
        name,
        price,
        description,
        quantity:1
    }
    return item
}


function addToCart(user:User,item:Item,_quantity:number){
    user.cart.push(item)
}

function removeFromCart(item: Item, user: User): void {
    user.cart = user.cart.filter((i) => i.id !== item.id);
  }

function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
    const index = user.cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
        user.cart[index].quantity -= quantity;
        if (user.cart[index].quantity <= 0) {
        user.cart.splice(index, 1);
        }
    }
}

  // Calculate the total price of all items in the cart
function cartTotal(user: User): number {
    return user.cart.reduce((total, item) => total + item.price, 0);
  }

function printCart(user:User): void {
    console.log("Cart:");
    user.cart.forEach((item) => {
        console.log(`  - ${item} (${item.quantity})`);
    });

    console.log(`Total: ${cartTotal(user)}`);


// Create a user
const user1 = createUser("John",25);


// Create 3 items to sell
const itemA = createItem("Item A",10, "This is item A.",99);
const itemB = createItem("Item B", 20, "This is item B.",99);
const itemC = createItem("Item C", 30, "This is item C.",99);

// Add Item A to the user's cart
addToCart(user1, itemA, 1);

// Print the contents of the user's cart
printCart(user1);

// Print the total of the user's cart
console.log(`Total: ${cartTotal(user1)}`);

// Add 3 Item B to the user's cart
addToCart(user1,itemB,3);

// Print the contents of the user's cart
printCart(user1);

// Print the total of the user's cart
console.log(`Total: ${cartTotal(user1)}`);

// Add 3 Item C to the user's cart
addToCart(user1,itemC, 3);


// Print the contents of the user's cart
printCart(user1);

// Print the total of the user's cart
console.log(`Total: ${cartTotal(user1)}`);

// Use the remove function to remove all of Item B from the cart
removeFromCart(itemB, user1);

// Print the contents of the user's cart
printCart(user1);

// Print the total of the user's cart
console.log(`Total: ${cartTotal(user1)}`);

// Use the removeQuantity function to remove 2 of Item C from the user's cart
removeQuantityFromCart(itemC, user1, 2);

// Print the contents of the user's cart
printCart(user1);

// Print the total of the user's cart
console.log(`Total: ${cartTotal(user1)}`);
}