const express = require('express')
const bodyParser = require('body-parser')

//Actual Database
// const nano = require('nano')('http://root:admin@hrdapps48:5984') 
// const training = nano.db.use('training')    

//For Training Purpose
const nano = require('nano')('http://root:admin@hrdapps50:5984')  //connnection for database

const system_master = nano.db.use('system_master') 
const system_master_login = nano.db.use('system_master_login') 
const system_employee = nano.db.use('system_employee')

const cors = require('cors')
 
const router = express.Router();  //Express 

// *********** Middleware **************************
router.use(cors()) //Cross-Origin Resource Sharing (CORS)
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())



//Add Route ( Login )
router.get('/loginAccount/:employeeId', ( req , res ) => {
    let employeeId = req.params.employeeId
                             //designname, indexname
    system_master_login.view('login', 'employeeId' , {
        'key': employeeId,
        'include_docs': true
    }).then( body => {
       res.send(body.rows[0].doc)
    
    })
})


//- VIEW Add Route employeeProfile ( getting all information from database )
router.get('/employeeProfile',(req,res) =>{
    system_master.view('login', 'employeeId', {
        include_docs: true
    }).then(body => {
        let toSend = body.rows.map(rec => {
            return rec.doc
        })
        res.send(toSend)
    })
})

router.get('/employeeProfile/employeeHistory',(req,res) =>{
    system_master.view('login', 'employeeId', {
        include_docs: true
    }).then(body => {
        let toSend = body.rows.filter(rec => {
            return rec.doc
        })
        res.send(toSend)
        // console.log(toSend)
    })
})
// add and update
router.post('/add/employee', (req, res) => {
    // console.log(req.body)
    system_master.insert(req.body).then(body => {
        res.send(body)
    })   
})

router.post('/registerUser' , ( req, res) => {
    system_master_login.insert(req.body).then(body => {
        res.send(body)
    })
})

// delete all document
router.post('/delete/employee', (req, res) => {
    system_master.destroy(req.body._id, req.body._rev).then(body => {      
        res.send(body)
        console.log(body)
    })
})

//delete history specific ( the same as add or edit )
router.post('/delete/EmployeeHistory' , ( req, res) => {
    system_master.insert(req.body).then(body=>{
        // console.log(body)
        res.send(body)
    })
})

/// - Insert Add Route ( Saving Data )
// Training
 router.post('/saveEmployeeProfile' , ( req , res ) => {
    system_employee.insert( req.body )
    .then( (body ) => {
        console.log(body)
        res.send('Sucessfully Saved!')
    })
    .catch((err) => {
        console.log(err.message)
        res.send('failed to saved!')
    })
 })

 
 // - UPDATE Add Route ( Updating )
 router.post('/updateEmployeeProfile', ( req , res ) => {
    system_employee.insert( req.body ).then( body =>{
        res.send(body.rev)
    })
 })


module.exports = router;
