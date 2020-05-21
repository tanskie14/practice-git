const items  = [
 { name: 'Bike', price: 100  },
 { name: 'TV', price: 200  },
 { name: 'Album', price: 10  },
 { name: 'Book', price: 5  },
 { name: 'Phone', price: 500  },
 { name: 'Computer', price: 1000 },
 { name: 'Keyboard', price: 25 },

]

const sampleArr = [
 { name: 'carl' , age : 25 , date : '2020-04-01', time: '07:00:00' },
 { name: 'angelo' , age : 49 , date : '2020-04-05', time: '10:00:00' },
 { name: 'angelo' , age : 48 , date : '2020-04-05', time: '08:00:00' },
 { name: 'angelo' , age : 47 , date : '2020-04-05', time: '13:00:00' },
 { name: 'test' , age : 32 , date : '2020-04-23', time: '16:00:00' },
 { name: 'test' , age : 31 , date : '2020-04-23', time: '10:00:00' },
 { name: 'tan' , age : 30 , date : '2020-04-02', time: '09:00:00' },
 { name: 'tan' , age : 30 , date : '2020-04-02', time: '14:00:00' },

// { name: 'carl' , age : 25 , date : '2020-04-01 07:00:00' },
// { name: 'angelo' , age : 49 , date : '2020-04-05 10:00:00' },
// { name: 'angelo' , age : 48 , date : '2020-04-05 08:00:00' },
// { name: 'angelo' , age : 47 , date : '2020-04-05 13:00:00'},
// { name: 'test' , age : 32 , date : '2020-04-23 16:00:00'},
// { name: 'test' , age : 31 , date : '2020-04-23 10:00:00' },
// { name: 'tan' , age : 30 , date : '2020-04-02 14:00:00'},
// { name: 'tan' , age : 30 , date : '2020-04-02 07:00:00'},
// { name: 'tan' , age : 30 , date : '2020-04-02 15:00:00'},
 
]

const sortArray = sampleArr.sort( (a,b) => {
    return new Date(`${b.date} ${b.time}`) -  new Date(`${a.date} ${a.time}`)
})

console.log(sortArray)



// const mappedItems = items.map(item=>{
//     if(item.name === 'Bike') {
//        return { ...item, orderBy: 'tanskie'}
//     } else {
//        return item
//     }
// })



// const date = ['2020-03-01', '2020-03-02','2020-03-03','2020-03-04','2020-03-05']

// const date1 = ['2020-03-01', '2020-03-02','2020-03-03']

// const resultDate = date.filter(rec=>{
//    return !date1.includes(rec)
// })

// console.log(resultDate)

// console.log(items)
// filter
// var filteredItems = items.filter(item =>{
//      return item.price <= 50
// })
//map
// var mapItems = items.map(item=>{
//     return item.price * 2 
// })
//find
// var foundItem = items.find(item =>{
//     return item.name === 'Computer'
// })
//forEach

// var forEachItem = items.forEach(item=>{
//     console.log(item.price)
// })

//some --- > check nya if isang object is nag true..
// var hasExpensiveItems = items.some(item=>{
//     return item.price <= 50 // result true or false
// })

//every --- > check nya lhat ng object if nagtrue sa condition
// var everyItems = items.every(item=>{
//     return item.price <= 1000  //result true or false
// })

//reduce  getting total
// var reducePrice = items.reduce( (currenTotal,item) =>{
//     return item.price + currenTotal
// }, 0)
// var total = 0;
// for(var i=0;i<items.length;i++){
//     total += items[i].price
// }

//includes --> return true or false



