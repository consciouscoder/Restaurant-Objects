

class FoodItem{
    constructor(name, calories, vegan, glutenFree, citrusFree) {
        this.name = name
        this.calories = calories
        this.vegan = vegan
        this.glutenFree = glutenFree
        this.citrusFree = citrusFree
    }
    
    stringify() {
        console.log('\n\nFood item: ' + this.name)
        console.log('\nCalories: ' + this.calories)
        console.log('\nVegan: ' + this.vegan)
        console.log('\nGluten Free: ' + this.glutenFree)
        console.log('\nCitrus Free: ' + this.citrusFree)        
    }

}

class Drink{
    constructor(name, desc, price, FoodItem) {
        this.name = name
        this.desc = desc
        this.price = price
        this.FoodItem = FoodItem
    }
    
    stringify() {
        console.log('\n\nFood item: ' + this.name)
        console.log('\nDescription: ' + this.desc)
        console.log('\nPrice: ' + this.price)
        console.log('\nFood Items ingredients: ' + this.FoodItem)
    }    
}

class Plate{
    constructor(name, desc, price, FoodItem) {
        this.name = name
        this.desc = desc
        this.price = price
        this.FoodItem = FoodItem
    }
    
    stringify() {
        console.log('\n\nFood item: ' + this.name)
        console.log('\nDescription: ' + this.desc)
        console.log('\nPrice: ' + this.price)
        console.log('\nFood Items ingredients: ' + this.FoodItem)
    }    
    
    isVegan() {
        for (var i = 0; i < this.FoodItem.length; i++) {
          if (!this.FoodItem[i].vegan) return false
        }
        return true
    }
    
    isGlutenFree() {
        for (var i = 0; i < this.FoodItem.length; i++) {
          if (!this.FoodItem[i].glutenFree) return false
        }
        return true
    }
    
    isCitrusFree() {
        for (var i = 0; i < this.FoodItem.length; i++) {
          if (!this.FoodItem[i].citrusFree) return false
        }
        return true
    }
}

class Order {
    constructor(Plate) {
        this.Plate = Plate
    }
}

class Menu {
    constructor(Plate) {
        this.Plate = Plate
    }
}

class Restaurant {
    constructor(name, desc, Menu) {
        this.name = name
        this.desc = desc
        this.Menu = Menu
    }
}

class Customer {
    constructor(dietaryPreference) {
        this.diet = dietaryPreference
    }
}

var foodItem1 = new FoodItem(
    'Rotisserie Chicken', 
    180, 
    false, 
    false,
    true
)

var foodItem2 = new FoodItem(
    'Spicy Tikka Chicken', 
    120, 
    false, 
    true,
    true
)

var foodItem3 = new FoodItem(
    'Falafel', 
    100, 
    true, 
    true,
    true
)

var foodItem4 = new FoodItem(
    'Feta Cheese', 
    120, 
    false, 
    true,
    true
)

var foodItem5 = new FoodItem(
    'Lettace', 
    100, 
    true, 
    true,
    true
)

var foodItem6 = new FoodItem(
    'Tomato', 
    100, 
    true, 
    true,
    true
)

var foodItem7 = new FoodItem(
    'Lime', 
    5, 
    true, 
    true,
    false    
)

var drink1 = new Drink(
    'Margarita', 
    'Tequila-infused cocktail that helps you forget all your problems.', 
    10.95, 
    [foodItem1.name,foodItem2.name]
)

var plate1 = new Plate(
    'Vegan Falafel Taco',
    'Vegan taco with gluten-free almond-flour tortila, lettace, tomato and falafel.',
    6.95,
    [foodItem3,foodItem5,foodItem6,foodItem7]
)


foodItem1.stringify()
foodItem2.stringify()
foodItem3.stringify()

drink1.stringify()

console.log('\n\n' + plate1.name + ' is vegan: ' + plate1.isVegan())
console.log(plate1.name + ' is gluten-free: ' + plate1.isGlutenFree())
console.log(plate1.name + ' is citris-free: ' + plate1.isCitrusFree())
