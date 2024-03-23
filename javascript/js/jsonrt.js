// let first = {
//     name:"jeeva",age:23

// }
// console.log(first)
// document.write(first)

// let jss = JSON.stringify(first)
// document.write(jss)

// let third =`{
//     "name":"jeeva",
//     "age":"25",
//     "city":"bengaluru"
// }`
// document.write(third)
// let jrt = JSON.parse(third)
// document.write(jrt.name,jrt.age,jrt.city)

// let arr = [10,20,30]
// let jsn = JSON.stringify(arr)
// document.write(jsn)

// let arr1 = `[10,20,30]`
// let jsn1 = JSON.parse(arr1)
// document.write(`<br>${jsn1}`)

let arr2 = `[
	{
        "name": "Aleix Melon",
        "id": "E00245",
        "role": ["Dev", "DBA"],
        "age": 23,
        "doj": "11-12-2019",
        "married": false,
        "address": {
            "street": "32, Laham St.",
            "city": "Innsbruck",
            "country": "Austria"
            },
        "referred-by": "E0012"
	},
    {
        "name": "Bob Washington",
        "id": "E01245",
        "role": ["HR"],
        "age": 43,
        "doj": "10-06-2010",
        "married": true,
        "address": {
            "street": "45, Abraham Lane.",
            "city": "Washington",
            "country": "USA"
            },
        "referred-by":null
	}
]`
let jsn2 = JSON.parse(arr2)
let rtt = jsn2.map((m)=>{
    return(`<br><br>Name:${m.name} <br>ID:${m.id} <br>role:${m.role} <br>age:${m.age} <br>doj:${m.doj} <br>Married:${m.married} <br>Address:${m.address.street} ${m.address.city} ${m.address.country}`)
})
document.write(rtt)