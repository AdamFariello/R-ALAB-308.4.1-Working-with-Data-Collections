//TODO: Part1
function convStringToArrays(testString) {
		let rows = []
		let row = []
		let s = ""
		for (const c of testString) {
			if (c == ',') {
				row.push(s)
				s = ""
			} else if (c == '\n') {
				row.push(s)
				rows.push(row)
				row = []
				s = ""
			} else {
				s += c
			}
		}
		row.push(s)
		rows.push(row)

		//console.log("\nPart 3")
		//console.log(rows)

		return rows
}

function lowerStringHeader(testArray) {
	//TODO: figure out lambda/anon function to do this auto
	for (let i = 0; i < testArray[0].length; i++) {
		testArray[0][i] = testArray[0][i].toLowerCase();
	}
	return testArray
}

// New Code
function part1() {
	//I guess nothing to do?
	let testString = 
	`Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n`
	+`1,0.00,0.050,0.050\n`
	+ `2,0.49,0.066,0.066\n`
	+ `3,0.98,0.087,0.080\n`
	+ `4,1.47,0.116,0.108\n`
	+ `5,1.96,0.142,0.138\n`
	+ `6,2.45,0.166,0.158\n`
	+ `7,2.94,0.193,0.174\n`
	+ `8,3.43,0.204,0.192\n`
	+ `9,3.92,0.226,0.205\n`
	+ `10,4.41,0.238,0.232`

	convStringToArrays(testString)
}
console.log("Part 1")
part1()



// TODO: Part 2
function part2() {
	//I guess also nothing? Just refer to old code
}
console.log("Part 2")
part2()



// TODO; Part 3
function part3() {
	let testString = 
	`ID,Name,Occupation,Age\n`
	+ `42,Bruce,Knight,41\n`
	+ `57,Bob,Fry Cook,19\n`
	+ `63,Blaine,Quiz Master,58\n`
	+ `98,Bill,Doctor’s Assistant,26`
	let csv = convStringToArrays(testString)
	console.log(csv)
	csv = lowerStringHeader(csv)
	console.log(csv)	


	let arrOfObj = []
	let csvheader = csv[0]
	let csvbody = csv.slice(1)
	for (row of csvbody) {
		let obj = {}
		for (let rowIndex = 0; rowIndex < row.length; rowIndex++) {
			obj[csvheader[rowIndex]] = row[rowIndex]
		}
		arrOfObj.push(obj)
	}
	
	for (obj of arrOfObj) {
		console.log(obj)
	}

	return arrOfObj 
}
console.log("Part 3")
let arrOfObj = part3()


// TODO: Part 4
// TODO: Figure out if method chaining is a thing
function part4(arrOfObj) {
	//Remove last entry
	arrOfObj = arrOfObj.slice(0,-1)
	console.log(arrOfObj )
	
	//insert at entry 1
	let newObj = {
		id: "48", 
		name: "Barry", 
		occupation: "Runner", 
		age: "25" 
	}
	let rightSide = arrOfObj.splice(1)
	arrOfObj.push(newObj)
	arrOfObj = arrOfObj.concat(rightSide)
	
	//Insert final entry
	newObj = {
		id: "7", name: "Bilbo", 
		occupation: "None", age: "111"
	}
	arrOfObj.push(newObj)
	//console.log(arrOfObj)

	//TODO: change "Age" to "age"
	let totalAge = 0
	for (objs of arrOfObj) {
		//console.log(objs.Age)
		totalAge += Number(objs.Age)
	}
	console.log(totalAge/arrOfObj.length)
	
	return arrOfObj
}
//console.log("Part 4")
//arrOfObj = part4(arrOfObj)


function part5(arrOfObj) {
	//console.log(arrOfObj)
}
//part5(arrOfObj)
