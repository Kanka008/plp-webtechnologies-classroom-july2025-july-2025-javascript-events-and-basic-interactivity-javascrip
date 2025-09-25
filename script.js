//part 1
const button = document.getElementById('button')
button.onclick = function(){
    document.body.style.backgroundColor = 'yellow';}

const myBox = document.getElementById('changeMe')
myBox.onmouseover = function(){
    if(myBox.style.background == 'aqua'){
        myBox.style.background = 'red';
    } else{
        myBox.style.background = 'aqua'
    }
}
//part 2
const button2 = document.getElementById('toggleButton')
button2.onclick = function(){
    if(document.body.style.background !== 'black'){
        document.body.style.background = 'black';
        document.body.style.color = 'white'
    }
    else{
        document.body.style.background = 'white';
        document.body.style.color = 'black'
    }
}

const myMenu = document.getElementById('menuDropdown')
const dropdown = document.getElementById('dropdownList')
myMenu.onmouseover = function(){
    dropdown.classList.remove('hidden');
}
dropdown.onmouseover = function(){
    dropdown.classList.remove('hidden');
}
myMenu.onmouseleave = function(){
    dropdown.classList.add('hidden');
}
dropdown.onmouseleave = function(){
    dropdown.classList.add('hidden');
}

//part 3
const form = document.getElementById('myForm');
const usernamename = document.getElementById('username');
const email = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

form.onsubmit = function(m){
    if(!email.value && !username.value){
        e.preventDefault(); // Prevent form submission
      errorMessage.textContent = "Complete the form!";
    }
}
   username.oninput = function () {
    if (username.value.length < 5) {
      username.setCustomValidity("Username must be at least 5 characters.");
    } else {
      username.setCustomValidity("");
    }
  }; 