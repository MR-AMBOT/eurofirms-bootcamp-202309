const registerForm = document .getElementById('register-form')

registerForm.onsubmit = function(event) {
    event.preventDefault()

   const name = event.target.name.value
   const email = event.target.email.value
   const password = event.target.password.value

    console.log('merging into the WEIRD', name, email, password)
    
    alert ('you are in')

    location.href = 'login.html'

}
