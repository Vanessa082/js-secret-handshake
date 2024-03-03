const collectNumber = document.querySelector('.collectNumber')
const displaySecretMessage = document.querySelector('.displaySecretMessage')
const shakeHandsBtn = document.querySelector('.shakeHandsBtn')

const secretHandshakeAction = [
   'wink',
   'double blink',
  'close your eyes',
  'jump',
   'Reverse the order of the operations in the secret handshake'
]

shakeHandsBtn.addEventListener('click', () =>{


  const inputNumber = parseInt (collectNumber.value)

  const secretHandshake = []

  if (inputNumber & 1) secretHandshake.push(secretHandshakeAction[0])
  if (inputNumber & 2) secretHandshake.push(secretHandshakeAction[1])
  if (inputNumber & 4) secretHandshake.push(secretHandshakeAction[2])
  if (inputNumber & 8) secretHandshake.push(secretHandshakeAction[3])
  if (inputNumber & 16) secretHandshake.reverse()

  displaySecretMessage.textContent = `Secret Handshake: ${secretHandshake.join(', ')}`
})