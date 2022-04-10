input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Indigo))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Violet))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.White))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
