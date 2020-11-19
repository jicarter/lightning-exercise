const favoritePet = (dog) => {
    if (dog) {
        return `my favorite dog breed is ${dog}`
    }

    return "I like cats"
}

const correctFavoritePet = favoritePet("border collie")
const wrongFavoritePet = favoritePet()

console.log(`When it comes to pets, ${correctFavoritePet}`)
console.log(`When it comes to pets, ${favoritePet}`)