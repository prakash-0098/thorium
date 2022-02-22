const express = require('express');
const router = express.Router();
const _ = require('lodash'); 

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

const movieName = ['Avengers', 'Spiderman', 'Venom', 'Titanic', 'Thor'];

router.get('/movies', (request, response) => {
    response.send(movieName.join(","));
});

router.get('/movies/:id', (request, response) => {
    const id = request.params.id;
    if (id > movieName.length - 1) {
        response.send("Sorry, Movie index not found !");
    }
    else {
        response.send(movieName[id]);
    }
});

router.get('/films', (request, response) => {
    const newArray = []; 
   movieName.forEach((data, index)=>{
        let obj = {};
        obj.id = index+1; 
        obj.name = data; 
        newArray.push(obj) 
   }); 
   response.send(newArray)
});

router.get('/films/:id', (request, response)=>{
    const dataMovie = [
        {
            "id": 1,
            "name": "Avengers"
        },
        {
            "id": 2,
            "name": "Spiderman"
        },
        {
            "id": 3,
            "name": "Venom"
        },
        {
            "id": 4,
            "name": "Titanic"
        },
        {
            "id": 5,
            "name": "Thor"
        }
    ]; 

    const id = request.params.id;
    const obj = _.find(dataMovie, { 'id': Number(id) });
    if(obj == undefined){
        response.send('No movie exists with this id');
    }else{
        response.send(obj); 
    }
}); 



module.exports = router;
