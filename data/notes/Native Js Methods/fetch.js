// replace `${i}` --> \`   \$   {i}   \`

let data = [

// card ----------------------------------------------------- >
[
//html
[
{'html': `<button id="fetchBtn">fetch</button>
<div id="fetchDiv"></div>`} 
],
//css
[],
//js
[
{'js': `const fetchBtn = document.getElementById("fetchBtn");
const fetchDiv = document.getElementById("fetchDiv");

// Promise
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

fetchBtn.addEventListener("click", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  fetchDiv.innerHTML = json.title;
});`}
],
// output
[],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{"js": `// Uploading JSON data
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});`}
],
// output
[],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[
{'html': `<!-- Upload File -->
<form action="/route" method="post">
  <input name="avatar" type="file" accept="image/png, image/jpeg" required />
  <input type="submit" value="Upload Image"/>
<form>`}
],
//css
[],
//js
[
{'js': `const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'username');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});`}
],
// output
[],
//render
{'render': true}
],

];

module.exports = data;