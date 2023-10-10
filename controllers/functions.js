let {people} = require('../data')


const login = (req, res)=>{
  const {name} = req.body
  console.log(req.body)
  
  if(name){
    res.status(200).send(`Welcome ${name}`)
  }
  else{
    res.status(401).send('Please enter the required information')
  }
  
}

const getPeople = (req, res)=>{
  res.status(200).json({success: true, data: people})
}

const addPeople =  (req, res)=>{

  const {name} = req.body

  if(!name) {
    return res
      .status(400)
      .json({success : false, msg: 'Please provide a valid entry.'})
  }

  res.status(201).json({success: true, person: name })

}

const addPeoplePostman = (req, res)=>{
  const {name} = req.body

  if(!name) {
    return res
      .status(400)
      .json({success : false, msg: 'Please provide a valid entry.'})
  }

  res.status(201).json({success: true, person: [...people, name]})
}

const updatePerson = (req, res)=>{
  const {id} = req.params
  const {name} = req.body
  // console.log(id, name)
  // res.send('Testing put request..')

  const person = people.find((p) => p.id === Number(id))

  if(!person){
    return res.status(400).json({success : false , msg: `Sorry! User with ID-${id} doesn't exist.`})
  }

  const changePeople = people.map((p) => {
    if(p.id === Number(id)){
      p.name = name
    }
    return p
  })
  res.status(200).json({success : true, data: changePeople})
}


const deletePerson = (req, res)=>{
  
  const {id} = req.params

  const person = people.find((p) => p.id === Number(id))

  if(!person){
    return res.status(404).json({success: false, msg: `Person with ID-${id} doesn't exist.`})
  }

  const deletePeople = people.filter((p)=> p.id !== Number(id))

  res.status(200).json({success: true, data: deletePeople})

}


module.exports = {
  getPeople, 
  addPeople,
  addPeoplePostman,
  updatePerson,
  deletePerson,
  login
}