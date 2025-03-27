input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    zeit += -1
    countdown += -1
    basic.showString("" + (zeit))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    music.stopMelody(MelodyStopOptions.All)
    ende = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    zeit += 1
    countdown += 1
    basic.showString("" + (zeit))
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < zeit + 1; index++) {
        basic.showNumber(countdown)
        countdown += -1
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    countdown = zeit
    while (ende == 0) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 150)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    ende = 0
})
let ende = 0
let countdown = 0
let zeit = 0
zeit = 5
countdown = 5
ende = 0
