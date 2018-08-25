const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("This is my resolved data");
        // resolve({
        //     name: "Andreea",
        //     age: 26
        // });
        reject("Something went wrong");
    }, 5000);

});

console.log("before");

promise.then((data) => {
    console.log("1", data);
}).catch((error) => {
    console.log("error: ", error);
});

console.log("after"); // concluzia? promise-ul este asincron, deci nu blocheaza executia, 
// acesta afiseaza raspunsul dupa cele 5 secunde, deci apare in consola, dupa after
//promise.then(data) este echivalent cu resolve, deci data = "This is my resolved data"
// nu putem sa trecem 2 sau mai multe apeluri resolve. doar primul va fi indeplinit, celelalte vor fi ignorate
// resolve nu poate avea mai multe argumente; daca vrem sa rezolvam mai multe chestii, apelam la object
