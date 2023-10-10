const express = require('express')
const router = express.Router()
const { getPeople, 
        addPeople,
        addPeoplePostman,
        updatePerson,
        deletePerson } = require('../controllers/functions')

// let {people} = require('../data')

router.get('/', getPeople)

router.post('/',addPeople)

router.post('/postman', addPeoplePostman)

//put request
router.put('/:id', updatePerson)

//delete request
router.delete('/:id', deletePerson)


//a shorter approach to route everything

// router.route('/').get(getPeople).post(addPeople)
// router.route('/postman').post(addPeoplePostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)



module.exports = router