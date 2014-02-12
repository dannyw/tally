var buffer =window.getSelection?window.getSelection().toString():document.selection.createRange().text;
var lines = buffer.split("\n");
var total_points = 0;
var tally = [{name: "Remove", points: 0}];

function updateTally(person, value) {
  console.log("Adding " + value + " to " + person);
  for (j=0;j<tally.length;j++) {
    if (tally[j].name.localeCompare(person) == 0) {
      tally[j].points += parseInt(value);
      console.log(tally[j].name + " is now " + tally[j].points);
      break;
    } else if (j == (tally.length-1)) {
      tally.push({name: person, points: value});
      break;
    }
  }

}
 
for (i=0;i<lines.length;i++) {
  console.log(lines[i]);
  var pattern;
  
  // if line has "Completed by", do the per person tally calculation
  if (lines[i].indexOf("Completed by") != -1) {
    pattern = /\[(\d+)\].*\(Completed by (.+) on \d.*\)/; // h/t to Arun for giving me this regex during our interview
  } else {
    pattern = /\[(\d+)\].*/; 
  }  
  var match = lines[i].match(pattern);
  
  if (match && match != "null") {  
    value = parseInt(match[1]);
    if (match[2] && match[2] != "null") {
      person = match[2];
      updateTally(person, value);
    }
  } else {
    continue;
  }
  
  total_points += value;
}

var output = "Total Points: " + total_points + "\n\n";

for (i=1;i<tally.length;i++) {
  output += tally[i].name + ": " + tally[i].points + "\n";
}

alert(output);
