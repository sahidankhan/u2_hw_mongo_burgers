// create 5 burgers (at least 3 should be beef)
db.burgers.insertOne({ bun:"potato", patty:"beef", topping:["onion","tomato","lettuce"], cheese:"american" }),
db.burgers.insertOne({ bun:"wheat", patty:"beef", topping:["onion","tomato","lettuce"], cheese:"cheddar" }),
db.burgers.insertOne({ bun:"wheat", patty:"beef", topping:["onion","lettuce"], cheese:"pepperJack" }),
db.burgers.insertOne({ bun:"white", patty:"beef", topping:["onion","pickles","lettuce"], cheese:"gouda" }),
db.burgers.insertOne({ bun:"lettuce", patty:"mushroom", topping:["onion","pickles","lettuce"], cheese:"mexicanMix" }),
db.burgers.insertOne({ bun:"brioche", patty:"chicken", topping:["pickles","lettuce"], cheese:"provolone" })

// find all the burgers
db.burgers.find({})
// show just the meat of each burger
db.burgers.find({},{patty:1})
// show just the toppings of each burger
db.burgers.find({},{topping:1})
// show everything but the cheese
db.burgers.find({},{bun:1,topping:1,patty:1})
// find all the burgers with beef
db.burgers.find({patty:"beef"})
// find all the burgers that are not beef
db.burgers.find({patty:{$ne:"beef"}})
// find the first burger with cheese
db.burgers.findOne()
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne({cheese:"american"},{ $set :{cheese:"doubleCheese"}})
// find the burger you updated to have double cheese
db.burgers.findOne()
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({},{ $set :{patty:"veggie"}})
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteOne({patty:"veggie"})
// drop the collection
//Expected Output
//true
db.burgers.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
db.dropDatabase()
// }

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 