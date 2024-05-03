const subscribeForm = document.querySelector('.subscribe-form');
const subscribeInput = subscribeForm?.querySelector('#subscribe-input')
const statusMsg = document.getElementById('status-message');
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function submitForm(event) {
  event.preventDefault()

  if(emailPattern.test(subscribeInput.value.trim())) {
    statusMsg.textContent = 'Thank you for subscribing!'
    statusMsg.classList.remove('invisible')
    statusMsg.classList.add('visible')
    subscribeInput.classList.remove('border-red-400')
    subscribeInput.value = ''
    subscribeInput.removeAttribute('aria-invalid')

    setTimeout(() => {
      statusMsg.classList.remove('visible')
      statusMsg.classList.add('invisible')
    }, 4000)
  } else {
    subscribeInput.setAttribute('aria-invalid', true)
    statusMsg.textContent = 'Please, enter a valid email address'
    statusMsg.classList.remove('invisible')
    statusMsg.classList.add('visible')
    subscribeInput.classList.add('border-red-400')

    // setTimeout(() => {
    //   statusMsg.classList.remove('visible')
    //   statusMsg.classList.add('invisible')
    // }, 5000)
  }

};

subscribeForm.addEventListener('submit', submitForm);