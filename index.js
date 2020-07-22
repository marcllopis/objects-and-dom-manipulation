let bootcamp = {
  instructor: {
    name: 'Marc',
    age: 18,
    email: 'marc@gmail.com',
    doesHeKnowsJS: true,
  },
  students: [
    {
      name: 'Carlos',
      city: 'Switzerland',
      email: 'carlos_codes@gmail.com'
    },
    {
      name: 'Sawi',
      city: 'London',
      email: 'Sawi_codes@gmail.com'
    },
    {
      name: 'Pablo',
      city: 'Argentina',
      email: 'Pablo_codes@gmail.com'
    }
  ]
}

// Show instructor name
let instructorContainer = document.getElementById('instructor');
instructorContainer.innerHTML = bootcamp.instructor.name


// Show all students
let studentsContainer = document.getElementById('students')
let studentsToHtml = '';

for (let i = 0; i < bootcamp.students.length; i++) {
  studentsToHtml += '<div class=student-info><p>Name: ' + bootcamp.students[i].name + '</p><p>City: ' + bootcamp.students[i].city + '</p><p>email: ' + bootcamp.students[i].email + '</p></div>'
}

studentsContainer.innerHTML = studentsToHtml;


// Create a comment form

let button = document.getElementById('button');
let input = document.getElementById('user');
let text = document.getElementById('text');
let comments = document.getElementById('comments');


let listOfComments = [];


button.addEventListener('click', () => {
  let commentsToHtml = '';

  listOfComments.push({
    user: input.value,
    text: text.value
  })
  input.value = '';
  text.value = '';

  for (let i = 0; i < listOfComments.length; i++) {
    commentsToHtml += '<p><span class="special">User name:</span> ' + listOfComments[i].user +'</p><p>Commented: ' + listOfComments[i].text +'</p><hr>'
  }

  comments.innerHTML = commentsToHtml;
})
