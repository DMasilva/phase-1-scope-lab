// Write your solution in this file!
var customerName = "bob"
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}
function setBestCustomer(){
     bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}
const leastFavoriteCustomer = "Masilva"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Tracy"
}

changeLeastFavoriteCustomer()
console.log(leastFavoriteCustomer)
