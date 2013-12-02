function canDrive(person, age) {
  var message = "";
  if(age == 16)
    message = "can drive under supervision";
  else {
    if(age < 17)
      message = "can't drive";
    else
      message = "can drive";
  }
  
  console.log(person + " " + message);
}

function printForEachPersonIn(people) {
  for(i = 0; i < people.length; i++) {
    canDrive(people[i][0], people[i][1]);
  }
}

function printInfoForEachFamilyIn(family) {
  for(i = 0; i < family.length; i++) {
    console.log("Last names: " + family[i][0])
    printForEachPersonIn(family[i][1]);
  }  
}

families = [
 ['Smiths', [['Jake', 10], ['John', 19]]],
 ['Johnson', [['Jill', 16], ['Jane', 18]]],
 ['Williams', [['Drew', "@16"], ['Rachel', 20]]]
]

printInfoForEachFamilyIn(families);

