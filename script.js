function calculate() {
  let marks = [];
  for (let i = 1; i <= 5; i++) {
    let val = parseInt(document.getElementById("s" + i).value);
    if (isNaN(val)) {
      alert("Enter valid marks for Subject " + i);
      return;
    }
    marks.push(val);
  }

  let total = marks.reduce((a, b) => a + b, 0);
  let avg = total / 5;
  let grade;

  if (avg >= 90) grade = 'A';
  else if (avg >= 80) grade = 'B';
  else if (avg >= 70) grade = 'C';
  else if (avg >= 60) grade = 'D';
  else grade = 'F';

  document.getElementById("result").innerHTML = 
    `Total: ${total}<br>Average: ${avg.toFixed(2)}<br>Grade: ${grade}`;
}
