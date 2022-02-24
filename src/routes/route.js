const express = require('express');
const router = express.Router();

const persons = [
    {
        name: "Prakash Sah", 
        age: 22,
        votingStatus: false
    },
    {
        name: "vijay", 
        age: 10,
        votingStatus: false
    },
    {
        name: "Pritesh Kumar", 
        age: 40,
        votingStatus: false
    },
    {
        name: "Suyesh", 
        age: 30,
        votingStatus: false
    },
    {
        name: "Sabiha khan", 
        age: 25,
        votingStatus: false
    },
    {
        name: "Rahul Kumar", 
        age: 5,
        votingStatus: false
    }
]; 

router.get('/check', (request, response)=>{
    const votingAge = request.query.votingAge; 
    const personRes = persons.filter(data => data.age > votingAge ? data.votingStatus = true : data.votingStatus = false); 
    response.send(personRes);
}); 

// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

module.exports = router;