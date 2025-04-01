'use strict'



function onSubmit(ev) {
  ev.preventDefault()


  let bgColor = document.querySelector('#background-color').value
  let txtColor = document.querySelector('#text-color').value
  let bod = document.querySelector('#birth-date').value
  let bot = document.querySelector('#birth-time').value

  const userData = { bgColor, txtColor, bod, bot }
  saveToStorage('userData', userData)

  document.body.style.backgroundColor = bgColor
  document.body.style.color = txtColor
}

function applyUserSettings() {
  const userData = loadFromStorage('userData')
  if (!userData) return

  const { bgColor, txtColor, vod, bot } = userData

  document.body.style.backgroundColor = bgColor
  document.body.style.color = txtColor

  document.querySelector('#background-color').value = bgColor
  document.querySelector('#text-color').value = txtColor
  document.querySelector('#birth-date').value = bod
  document.querySelector('#birth-time').value = bot
}