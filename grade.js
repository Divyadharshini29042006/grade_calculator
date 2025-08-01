document.getElementById('gradeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const regno = document.getElementById('regno').value.trim();

  const subjects = [
    { name: "Theory of Computation", score: parseInt(document.getElementById('toc').value) },
    { name: "DevOps", score: parseInt(document.getElementById('devops').value) },
    { name: "Modern Web Technology", score: parseInt(document.getElementById('mwt').value) },
    { name: "NoSQL", score: parseInt(document.getElementById('nosql').value) },
    { name: "OOAD", score: parseInt(document.getElementById('ooad').value) }
  ];

  if (subjects.some(sub => isNaN(sub.score) || sub.score < 0 || sub.score > 100)) {
    document.getElementById('output').innerHTML = " Please enter valid marks (0-100) for all subjects.";
    return;
  }

  let total = 0;
  let subjectGradesHTML = '';

  subjects.forEach(sub => {
    total += sub.score;
    let grade = '';
    if (sub.score >= 90) grade = 'A';
    else if (sub.score >= 80) grade = 'B';
    else if (sub.score >= 70) grade = 'C';
    else if (sub.score >= 60) grade = 'D';
    else grade = 'F';

    subjectGradesHTML += `<li>📘 ${sub.name}: <strong>Grade ${grade}</strong></li>`;
  });

  const average = total / subjects.length;
  let finalGrade = '';
  if (average >= 90) finalGrade = 'A';
  else if (average >= 80) finalGrade = 'B';
  else if (average >= 70) finalGrade = 'C';
  else if (average >= 60) finalGrade = 'D';
  else finalGrade = 'F';

  document.getElementById('output').innerHTML = `
    <h3> Result for ${name} (Reg No: ${regno})</h3>
    <ul style="text-align: left; padding-left: 0; list-style: none;">
      ${subjectGradesHTML}
    </ul>
    <p><strong>Average:</strong> ${average.toFixed(2)}%</p>
    <p><strong>Overall Grade:</strong> ${finalGrade}</p>
  `;
});
