var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I am from ' + person.country + '</p>';
person.country = 'Brazil';
message += '<p>But I wish I was from ' + person.country + '</p>';
message += '<p>I have ' + person.skills.length + ' total skills: ' + person.skills.join(', ') + '</p>';
print(message);