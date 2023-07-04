const scriptURL = 'https://script.google.com/macros/s/AKfycbz45OkEn-dxUGN5r7hWIv-571Cq9lj9HLzzzZfvis4_E8F7vJC8icVyJrrZDaS1GQie/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})