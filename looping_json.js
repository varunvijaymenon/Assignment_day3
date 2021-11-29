let json_data = [
    {
        "name" : "abc",
        "age"  : "22",
        "location" : "chennai"
    },
    {
        "name" : "cde",
        "age"  : "23",
        "location" : "bangalore"
    },
    {
        "name" : "efg",
        "age"  : "24",
        "location" : "kerala"
    },
    {
        "name" : "ghi",
        "age"  : "25",
        "location" : "pune"
    }
];


// for loop

for (let i = 0; i <json_data.length; i++) {
    console.log(json_data[i])
}

/* output: { name: 'abc', age: '22', location: 'chennai' }
{ name: 'cde', age: '23', location: 'bangalore' }
{ name: 'efg', age: '24', location: 'kerala' }
{ name: 'ghi', age: '25', location: 'pune' } */


// for in loop

for(i in json_data) {
    console.log(i)
}

/* 0
1
2
3 */

// for of loop

for(i of json_data){
    console.log(i)
}

/* { name: 'abc', age: '22', location: 'chennai' }
{ name: 'cde', age: '23', location: 'bangalore' }
{ name: 'efg', age: '24', location: 'kerala' }
{ name: 'ghi', age: '25', location: 'pune' } */

// forEach

json_data.forEach(i=>console.log(i))

/* { name: 'abc', age: '22', location: 'chennai' }
{ name: 'cde', age: '23', location: 'bangalore' }
{ name: 'efg', age: '24', location: 'kerala' }
{ name: 'ghi', age: '25', location: 'pune' } */