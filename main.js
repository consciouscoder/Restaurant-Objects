

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
        
        var ingStr = ""
        
        // Stringify the list of FoodItem ingredients in the Plate array 
        for(var i = 0; i < this.FoodItem.length; i++) {
            if (i !== 0) { ingStr += ', ' } // Add comma between ingredients
            ingStr += this.FoodItem[i].name 
        }
        
        console.log (ingStr)
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
        
        console.log('\nFood Items ingredients: ')
        
        var ingStr = ""
        
        // Stringify the list of FoodItem ingredients in the Plate array 
        for(var i = 0; i < this.FoodItem.length; i++) {
            if (i !== 0) { ingStr += ', ' } // Add comma between ingredients
            ingStr += this.FoodItem[i].name 
        }
        
        console.log (ingStr)
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
    
    stringify() {
        this.Plate.forEach(function(){ Plate.stingify },this)
    }
}

class Restaurant {
    constructor(name, desc, Menu) {
        this.name = name
        this.desc = desc
        this.Menu = Menu
    }
    
    stringify() {
        console.log('\n\nRestaurant Name: ' + this.name)
        console.log('\nDescription: ' + this.desc)
        
        console.log('\nMenu: ') + this.Menu    
    }
}

class Customer {
    constructor(dietaryPreference) {
        this.diet = dietaryPreference
    }
}

//========================================== START OF FOODITEM INGREDIENTS =======================================

var foodRotChicken = new FoodItem(
    'Rotisserie Chicken', 
    180, 
    false, 
    false,
    true
)

var foodSpicyChicken = new FoodItem(
    'Spicy Tikka Chicken', 
    120, 
    false, 
    true,
    true
)

var foodFalafel = new FoodItem(
    'Falafel', 
    100, 
    true, 
    true,
    true
)

var foodFeta = new FoodItem(
    'Feta Cheese', 
    120, 
    false, 
    true,
    true
)

var foodLettace = new FoodItem(
    'Lettace', 
    100, 
    true, 
    true,
    true
)

var foodTomato = new FoodItem(
    'Tomato', 
    100, 
    true, 
    true,
    true
)

var foodLime = new FoodItem(
    'Lime', 
    5, 
    true, 
    true,
    false    
)

var foodGroundBeef = new FoodItem(
    'Ground Beef', 
    220, 
    false, 
    true,
    true    
)

var foodTortilla = new FoodItem(
    'Wheat Tortilla', 
    120, 
    true, 
    false,
    true   
)

var foodAvocado = new FoodItem(
    'Avocado', 
    140, 
    true, 
    true,
    false
)

var foodTequila = new FoodItem(
    'Tequila', 
    120, 
    true, 
    true,
    true
)

//========================================== END OF FOODITEM INGREDIENTS =======================================


//======= START OF PLATES AND DRINKS ===========================

var plateVeganFalafelTaco = new Plate(
    'Vegan Falafel Taco',
    'Vegan taco with gluten-free almond-flour tortilla, lettace, tomato and falafel.',
    6.95,
    [foodFalafel,foodFeta,foodLettace,foodTomato]
)

// Burrito Plate
var plateBurrito = new Plate(
    'Beef Burrito',
    'A traditional ground beef burrito plate.',
    8.95,
    [foodGroundBeef,foodTortilla,foodLettace,foodTomato]
    )
    
// Guacamole Plate
var plateGuacamole = new Plate(
    'Guacamole',
    'A traditional ground beef burrito plate.',
    6.95,
    [foodAvocado,foodTomato,foodLime]
    )
    
// Margarita Drink

var drinkMargarita = new Drink(
    'Margarita', 
    'Tequila-infused cocktail that helps you forget all your problems.', 
    10.95, 
    [foodTequila,foodLime]
)

//======= END OF PLATES AND DRINKS ===========================

foodRotChicken.stringify()
foodSpicyChicken.stringify()
foodFalafel.stringify()

// PART II - STEP 3

console.log('\n\n' + plateVeganFalafelTaco.name + ' is vegan: ' + plateVeganFalafelTaco.isVegan())
console.log(plateVeganFalafelTaco.name + ' is gluten-free: ' + plateVeganFalafelTaco.isGlutenFree())
console.log(plateVeganFalafelTaco.name + ' is citris-free: ' + plateVeganFalafelTaco.isCitrusFree())

// PART II - STEP 4 -- Instantiate Burrito Plate, Guacamole Plate, and a Margarita Drink
plateBurrito.stringify()
plateGuacamole.stringify()
drinkMargarita.stringify()

// plateVeganFalafelTaco.stringify()

// PART II - STEP 5 -- Instantiate a Menu that contains plateBurrito, plateGuacamole, drinkMargarita

var menuMain = new Menu([plateBurrito,plateGuacamole,drinkMargarita])

console.log(menuMain)

// PART II - STEP 6

var restaurantFlyingTaco = new Restaurant(
    'Flying Taco', 
    'Artisan foodie tacos with service so fast, the tacos fly!', 
    [menuMain]
)

// PART II - STEP 7 - stringify the entire Restaurant!
// *** TODO: NEED TO GET STRINGIFY to cascade from Restaurant->Menu->Plates->FoodItems
restaurantFlyingTaco.stringify()


