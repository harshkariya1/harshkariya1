import fs from 'fs'
const arrayOfSongs=[
    {
        id: 1,
        title: "G.O.A.T",
        movie: "NONE",
        genre: "punjabi",
        rating: 4,
    },
    {
        id: 2,
        title: "Tere Havawale",
        movie: "Ajab Prem Ki Gajab Kahani",
        genre: "Romantic",
        rating: 1,
    },
    {
        id: 3,
        title: "Bandeya",
        movie: "Dil Juunglee",
        genre: "Break-up",
        rating: 3,
    },
    {
        id: 4,
        title: "Hawayein",
        movie: "Jab Harry Met Sejal",
        genre: "Romantic",
        rating: 2,
    },
    {
        id: 5,
        title: "Channa Mereya",
        movie: "Ae Dil Hai Mushkil",
        genre: "Romantic",
        rating: 4,
    }
]
function searchGenre(str){
    return arrayOfSongs.filter( ( item) => item.genre.includes(str))
}
let result = searchGenre("Romantic");
fs.writeFileSync("Task1.txt", "1> the below data is the result of search genre according to the\n"+JSON.stringify(result,null,4));


function findTrackById(id){
    return arrayOfSongs.find((i) => i.id == id);
}
let result1 = findTrackById(3);
fs.writeFileSync("Task2.txt","2> the below data is the result of search genre according to the\n"+JSON.stringify(result1,null,4));



function sortByRating(arr , direaction = "desc"){
    if(direaction == "desc"){
        return arr.sort((a,b) => a.rating - b.rating);
    } else {
        return arr.sort((a,b) => b.rating - a.rating);
    }
}
let result2 = sortByRating(arrayOfSongs, "asc");
let result3 = sortByRating(arrayOfSongs, "desc");
fs.writeFileSync("Task3.txt","3> the below data is the result of sort to the \n"+JSON.stringify(result2,null,4));
fs.appendFileSync("Task3.txt","3> the below data is the result of sort to the\n"+JSON.stringify(result3,null,4));

export default searchGenre;
export {findTrackById};