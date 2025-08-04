//TODO: Part1

//Original code
//Part 3: Feeling Loopy
function part3OldCode() {
		/*
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
		*/

		let testString = 
		`ID,Name,Occupation,Age\n`
		+ `42,Bruce,Knight,41\n`
		+ `57,Bob,Fry Cook,19\n`
		+ `63,Blaine,Quiz Master,58\n`
		+ `98,Bill,Doctor’s Assistant,26`

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

// New Code
// Nothing? 
// I accidentally used arrays last time, so this time it's already done.



// TODO: Part 2
//I guess also nothing? Just refer to old code



// TODO; Part 3
let csv = part3OldCode()
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
