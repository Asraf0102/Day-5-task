// QUESTION NO.1 JSON iterate over all for loops (for, for in, for of, forEach)

// For Loop condition

let studentName =[{"Name" : "Asraf" , "BloodGroop" : "A+"},
{"Name" : "Dharan" , "BloodGroop" : "B+"}]

for (i = 0 ; i<studentName.length ;i++)
{
console.log(studentName[i].Name)
console.log(studentName[i].BloodGroop)
}

// For in loop


let college = {
  "Department" : "BCA"  ,
   "Year"      : "3 rd year"
}

for (let x in college)
{
//console.log(x)
}
console.log(college.Department,college.Year)


// For of loop 


let population = [{
  "india" : "9321654"  ,
   "Year"      : "2023"
}]

for (let x of population)
{
	console.log(x)}


 // For each 

 let student = [{
  "name" : "Asraf",
  "Grade":  "S"
} ]
student.forEach((marks) => 
console.log(marks))
