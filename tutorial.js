// const a = 5;
// a=10
// console.log(a)
//if statement
// var score = 80
// if(score > 70 && score <= 100){
//     console.log('A')
// }
// else if(score > 59 && score < 70){
//     console.log('B')
// }
// else if(score > 49 && score < 60){
//     console.log('C')
// }
// else if(score > 44 && score < 50){
//     console.log('D')
// }
// else if(score > 0 && score < 45){
//     console.log("F")
// }
// else{
//     console.log('Invalid score')
// }
// else{
//     console.log('Number not found')
// }
//switch case

//for loop
// for(let i=1; i <= 10; i = i+2){
//     console.log(i)
// }

// var a = [1, 2, 3, 4, 5]
// var b = a.pop()
// console.log(a)

//function
// function sayHello(){
//     console.log()
//     return 0
// }
// var name = 'youtube@gmail.com'
// var b =  name.split('@')
// console.log(b[0])
function getWord(word){
    var word = word.toLowerCase().split(' ')
    //console.log(word)
    for(let i=0; i < word.length; i++){
        //console.log(word[2])
        if(word[i] == 'dog'){
            console.log(word[i] + ' is found in index ' + i)
        }
        else{
            console.log('Word not found in index ' + i)
        }
    }
}
getWord('is there a dog in the house')