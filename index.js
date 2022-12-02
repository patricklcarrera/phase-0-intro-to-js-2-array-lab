
const cats = ["Milo", "Otis", "Garfield",]
//const copyOfCats =[...cats]


function destructivelyAppendCat(name){
    cats.push(name)
    return
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return
}
function destructivelyRemoveLastCat(name){  
    cats.pop(name)
    return
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)    
    return
}

function appendCat (name){
    const copyOfCats = [...cats]
    copyOfCats.push(name)
    return copyOfCats
}
function prependCat(name){
    const copyOfCats = [...cats]
    copyOfCats.unshift(name)
    return copyOfCats
}
function removeLastCat(name){
    const copyOfCats = [...cats]
    copyOfCats.pop(name)
    return copyOfCats
}
function removeFirstCat(name){
    const copyOfCats = [...cats]
    copyOfCats.shift(name)
    return copyOfCats
}

