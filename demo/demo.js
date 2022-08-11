const input_Integer = require('input-integer--cc')

const opt1 = { min: 1, max: 150 }
const opt2 = { min: 1872, max: 2022 }

const input1 = input_Integer(opt1)
const input2 = input_Integer(opt2)
const title = "My demo form"
const subtitle = "Please fill out the form"

const page = document.createElement('div')
page.innerHTML = `
    <h1> ${title} </h1>
    <h2> ${subtitle} </h2>
    <h3>Enter your age</h3>
    <x></x>
    <h4>Enter your year of birth</h4>
    <y></y>
`    
page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)

document.body.append(page)