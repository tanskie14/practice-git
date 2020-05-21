class User  {
    constructor( firstName, lastName, email){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.score = 0
    }
    //methods
    login(){
        console.log(`${this.email} has been logged in`)
        return this;
    }

    logout(){
        console.log(`${this.email} has been logged out`)
        return this;
    }

    updateScore(){
        this.score++;
        console.log(`${this.email} score is now ${this.score}`)
        return this;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    editName(newname){
        const myname = newname.split(" ");
        // console.log(myname)
        this.firstName = myname[0];
        this.lastName = myname[1];
    }

}

//class inheritance
class Admin extends User {
   deleteUser(user) {
    users = users.filter( u => {
        return u.email != user.email
    })
   }
}

const tan = new User('Carl Angelo', 'Tan' , 'carlangelo@gmail.com')
console.log(tan.getFullName())
tan.editName('Tanskie San')
console.log(`Updated Name: ${tan.getFullName()}`)
// var newUser1 = new User('tanskie@gmail.com', 'tanskie');
// var newUser2 = new User('user2@gmail.com', 'user2');
// var admin = new Admin ('admin@gmail.com', 'administ')
// var users = [newUser1 , newUser2, admin]
// admin.deleteUser(newUser1);





// console.log(newUser1.login().updateScore().updateScore().logout());
// console.log(newUser2.logout()); 



// ====================  (OOP CLASS)===============================================
// class Tao{
//     constructor(lastName,firstName,bloodType) {
//         this.lastName = lastName;
//         this.firstName = firstName;
//         this.bloodType = bloodType;
//     }

//     //Method
//     getFullName(){
//         return `${this.lastName} ${this.firstName}`
//     }
// }

// //instantiate object
// const tao1 = new Tao('Tan','Carl Angelo', 'O');
// console.log(tao1.getFullName())



// =======================TRY AND CATCH ( ERROR HANDLING)======================================
// const convertToPeso  = (dollar)  => {
//   if( typeof dollar === 'number') {
//        return dollar * 50.98
//   } else {
//       throw Error('Amount should be a number!!');
//   }
// }

// try {
//     const myValue = convertToPeso('adada');
//     console.log(myValue)
// }catch (error) {
//     console.log('!!!')
//     console.log(error.message)
// } 


// console.log('This program will not run - ****

// =======================================================

// const contacts = [
//  { id : '1', name :'tanskie1', saveIn : 'Phone'},
//  { id : '2', name :'tanskie2', saveIn : 'Phone'},
//  { id : '3', name :'tanskie3', saveIn : 'SD'},
// ]

// // const contactJSON = JSON.stringify(contacts);
// // console.log(contactJSON)
// const filterSaveIn = contacts.filter(rec=> {
//      return rec.saveIn === 'Phone'
// }).map(rec1 => {
//      return rec1.name
// })

// console.log(filterSaveIn)