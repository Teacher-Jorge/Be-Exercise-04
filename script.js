let input1 =document.getElementById('input1')
let check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = score.innerHTML
let audioSword = document.getElementById('audioSword')
let wrongSound = document.getElementById('wrongSound')

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'Are' || input1.value === 'are') {
        audioSword.play()
        input1.value = 'Are'
        input1.style.color = 'limegreen'
        check1.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})  

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'Am' || input1.value === 'am') {
        wrongSound.play()
        input1.style.color = 'red'
        input1.disabled = true
        document.getElementById('input2').focus()
    } 
}) 

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'Is' || input1.value === 'is') {
        wrongSound.play()
        input1.style.color = 'red'
        input1.disabled = true
        document.getElementById('input2').focus()
    } 
})


let translation = document.getElementById('translation')

btn1T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn1T.style.backgroundColor = 'red'
    btn1T.style.color = 'yellow'
    translation.innerHTML = 'Você é professor?'
    setTimeout(function() {
        btn1T.style.backgroundColor = 'white'
        btn1T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})

//Question 02

let input2 =document.getElementById('input2')
let check2 = document.getElementById('check2')

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'Am' || input2.value === 'am') {
        audioSword.play()
        input2.value = 'Am'
        input2.style.color = 'limegreen'
        check2.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input2.disabled = true
        document.getElementById('input3').focus()
    }
})  

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'Are' || input2.value === 'are') {
        wrongSound.play()
        input2.style.color = 'red'
        input2.disabled = true
        document.getElementById('input3').focus()
    } 
}) 

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'Is' || input2.value === 'is') {
        wrongSound.play()
        input2.style.color = 'red'
        input2.disabled = true
        document.getElementById('input3').focus()
    } 
})

btn2T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn2T.style.backgroundColor = 'red'
    btn2T.style.color = 'yellow'
    translation.innerHTML = 'Eu estou na sala A?'
    setTimeout(function() {
        btn2T.style.backgroundColor = 'white'
        btn2T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})

//Question 03

let input3 =document.getElementById('input3')
let check3 = document.getElementById('check3')

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'Is' || input3.value === 'is') {
        audioSword.play()
        input3.value = 'Is'
        input3.style.color = 'limegreen'
        check3.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input3.disabled = true
        document.getElementById('input4').focus()
    }
})  

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'Are' || input3.value === 'are') {
        wrongSound.play()
        input3.style.color = 'red'
        input3.disabled = true
        document.getElementById('input4').focus()
    } 
}) 

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'Am' || input3.value === 'am') {
        wrongSound.play()
        input3.style.color = 'red'
        input3.disabled = true
        document.getElementById('input4').focus()
    } 
})

btn3T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn3T.style.backgroundColor = 'red'
    btn3T.style.color = 'yellow'
    translation.innerHTML = 'Sua esposa é aluna também?'
    setTimeout(function() {
        btn3T.style.backgroundColor = 'white'
        btn3T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})

//Question 04

let input4 =document.getElementById('input4')
let check4 = document.getElementById('check4')

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'Am' || input4.value === 'am') {
        audioSword.play()
        input4.value = 'Am'
        input4.style.color = 'limegreen'
        check4.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input4.disabled = true
        document.getElementById('input5').focus()
    }
})  

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'Are' || input4.value === 'are') {
        wrongSound.play()
        input4.style.color = 'red'
        input4.disabled = true
        document.getElementById('input5').focus()
    } 
}) 

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'Is' || input4.value === 'is') {
        wrongSound.play()
        input4.style.color = 'red'
        input4.disabled = true
        document.getElementById('input5').focus()
    } 
})

btn4T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn4T.style.backgroundColor = 'red'
    btn4T.style.color = 'yellow'
    translation.innerHTML = 'Eu sou americano?'
    setTimeout(function() {
        btn4T.style.backgroundColor = 'white'
        btn4T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})


//Question 05

let input5 =document.getElementById('input5')
let check5 = document.getElementById('check5')

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'Are' || input5.value === 'are') {
        audioSword.play()
        input5.value = 'Are'
        input5.style.color = 'limegreen'
        check5.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input5.disabled = true
        document.getElementById('input5').focus()
    }
})  

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'Am' || input5.value === 'am') {
        wrongSound.play()
        input5.style.color = 'red'
        input5.disabled = true
        document.getElementById('input5').focus()
    } 
}) 

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'Is' || input5.value === 'is') {
        wrongSound.play()
        input5.style.color = 'red'
        input5.disabled = true
    } 
})

btn5T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn5T.style.backgroundColor = 'red'
    btn5T.style.color = 'yellow'
    translation.innerHTML = 'Você é brasileiro?'
    setTimeout(function() {
        btn5T.style.backgroundColor = 'white'
        btn5T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})



