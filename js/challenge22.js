/*
you're online shopping for holiday gifts, but money is tight so we need to look at the cheapest items first. Use the built in sort()
method to write a function that returns a new array of products sorted by price, chepaest to most expensive. then log the item and
the price to the console


    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued


*/

const products = [
    {
        product: "🍭",
        price: 2.99,
    },
    {
        product: "🍫",
        price: .99, 
    },
    {
        product: "🏡",
        price: 40000000
    },
    {
        product: "🧁",
        price: .99, 
    },
    {
        product: "📚",
        price: .99, 
    },
    {
        product: "⏰",
        price: 13.99, 
    }, 
    {
        product: "🍬",
        price: .89, 
    },
    {
        product: "🥎",
        price: 3.99,
    }, 
    {
        product: "🎸",
        price: 13.99, 
    }, 
    {
        product: "🎨",
        price: 23.99, 
    }, 
    {
        product: "💕",
        price: 0, 
    }, 
]

function sortProducts(data){
    //
  return data.sort((a, b) => a.price - b.price)
}

const listByCheapest = sortProducts(products)

listByCheapest.forEach(item => console.log(item.product, item.price))

console.log(listByCheapest)