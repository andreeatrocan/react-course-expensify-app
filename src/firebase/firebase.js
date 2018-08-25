import * as firebase from "firebase";


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();


  export { firebase, database as default };

//   //child_removed

//   database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// //child_changed

//   database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   }); 

// //child_added - is ruuning si pt copiii deja existenti, nu doar pt cei nou adaugati
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// //   database.ref("expenses").on("value", (snapshot) =>{
// //     const expenses = [];
// //             snapshot.forEach((childSnapshot) => {
// //                 expenses.push({
// //                     id: childSnapshot.key,
// //                     ...childSnapshot.val()
// //                 });
// //             });
// //             console.log(expenses);
// // });

// //   database.ref("expenses")
// //     .once("value")
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     }); // ne pune cele 3 expensesuri intr-un array, forEach se apeleaza pt fiecae expense, id: este cel unic generat automat, 
//     // apoi facem spread la tot ce se afla in fiecare object expense, rezultand un array de obiecte

//   database.ref("expenses").push({
//     description: "vacation",
//     note: "",
//     amount: 550,
//     createdAt: 654  
//   });

// //   database.ref("notes").push({
// //       title: "Course Topics",
// //       body: "React Native, Angular, Python"
// //   }) //push ne ajuta sa adaugam o lista de obiectet da database, generand automat un id 

// // database.ref("notes/-LKWhm5quEuB0VRJl0NV").remove(); 



// //   database.ref().on("value", (snapshot) => {
// //       const val = snapshot.val();
// //       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// //   })

// //   const onValueChange = database.ref().on("value", (snapshot) => {
// //         console.log(snapshot.val());
// //   }, (e) => {
// //     console.log("Error with data fetching", e);
// //   }); //on seteaza un subscribtion

// //   setTimeout(() => {
// //       database.ref("age").set(29);
// //   }, 3500);

// //   setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref("age").set(31);
// // }, 10500);
// //   database.ref()
// //     .once("value")
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log("Error fetching data", e);
// //     });
// //   database.ref().set({
// //       name: "Andreea Trocan",
// //       age: 26,
// //       stressLevel: 6,
// //       job: {
// //           title: "Software developer",
// //           company: "Google"
// //       },
// //       location: {
// //           city: "Bucharest",
// //           country: "Romania"
// //       },
// //   }).then(() => {
// //       console.log("Data is saved");
// //   }).catch((e) => {
// //       console.log("This failed.", e);
// //   });

// //   database.ref("isSingle").set(null);

// //   database.ref().update({
// //     stressLevel: 9,
// //     "job/company": "Amazon",
// //     "location/city": "Seattle"
// //   });

// // database.ref("isSingle")
// //     .remove()
// //     .then(() => {
// //         console.log("Data was successfully removed");
// //     }).catch((e) => {
// //         console.log("Remove failed", e);
// //     });