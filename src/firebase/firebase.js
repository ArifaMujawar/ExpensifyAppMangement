import * as firebase from 'firebase';

const config = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default };

// //child _removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });



// // database.ref('expenses').push({
// //     description:'Rent',
// //     note:'blah blah blah',
// //     amount: 2300,
// //     createdAt:1029
// // });

// //displaying db data into an array
// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //        const  expenses = [];
// //        snapshot.forEach((item) => {
// //            expenses.push({
// //                id:item.key,
// //                ...item.val()
// //            });
// //        });
// //        console.log(expenses);
// //     });

// // add subscription
// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const  expenses = [];
// //        snapshot.forEach((item) => {
// //            expenses.push({
// //                id:item.key,
// //                ...item.val()
// //            });
// //        });
// //        console.log(expenses);
// //     }, (e) => {
// //         console.log('Error with data fetching', e);
// //     })
    



// // database.ref().set({
// //     name: 'Arifa Muj',
// //     age: 28,
// //     stressLevel: 6,
// //     job: {
// //         title:'Software developer',
// //         company:'Google'
// //     },
// //     location: {
// //         city: 'Belgaum',
// //         country: 'India'
// //     }
// // });

// // database.ref('location/city').set('Espoo');
// // database.ref('location/country').set('FInland');

// // database.ref('attributes/height').set('153cm');
// // database.ref('attributes/weight').set('61kg').then(()=>{
// //     console.log('Data is saved');
// // }).catch((e)=>{
// //     console.log('This failed', e);
// // });

// //remove function
// // database.ref('isSingle').remove().then(()=>{
// //     console.log('Removed succeeded');
// // }).catch(()=>{
// //     console.log('Remove failed:', error);
// // })

// //update function
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company':'Amazon',
// //     'location/city':'Seattle'
// // });

// //add subscription
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// // setTimeout(()=>{
// //     database.ref('age').set(24);
// // },3500);

// //remove or off subscription
// // setTimeout(()=>{
// //     database.ref().off(onValueChange);
// // },7500);

// // setTimeout(()=>{
// //     database.ref('age').set(84);
// // },13500);


// // database.ref().on('value', (snapshot) => {
// //     const value = snapshot.val(); 
// //     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// // },(e) => {
// //     console.log('Error with data fetching', e);
// // });

