input.onButtonPressed(Button.B, function () {
    basic.showNumber(cant_playeras_mujer)
    basic.showString("Mujer")
    basic.showNumber(cant_playeras_hombre)
    basic.showString("Hombre")
    basic.showString("Total=")
    mujer_total = cant_playeras_mujer * precio_playeras_mujer
    hombre_total = cant_playeras_hombre * precio_playeras_hombre
    total = mujer_total + hombre_total
    basic.showNumber(total)
})
let total = 0
let hombre_total = 0
let mujer_total = 0
let precio_playeras_hombre = 0
let precio_playeras_mujer = 0
let cant_playeras_hombre = 0
let cant_playeras_mujer = 0
basic.showString("Rodrigo Abrin A01285251")
cant_playeras_mujer = randint(20, 200)
cant_playeras_hombre = randint(20, 200)
precio_playeras_mujer = 250
precio_playeras_hombre = 200
basic.forever(function () {
	
})
