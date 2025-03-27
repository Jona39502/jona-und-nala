input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.stopAllSounds()
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(30000)
    music.playMelody("C5 B C5 B C5 B C5 B ", 120)
})
basic.forever(function () {
	
})
