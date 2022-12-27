input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        leva_led.showColor(neopixel.colors(NeoPixelColors.Violet))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x7f00ff)
        basic.pause(500)
        leva_led.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
        basic.pause(500)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 5; index++) {
        l_p_led.showColor(neopixel.colors(NeoPixelColors.Yellow))
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
        basic.pause(500)
        l_p_led.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        prava_led.showColor(neopixel.colors(NeoPixelColors.Violet))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x7f00ff)
        basic.pause(500)
        prava_led.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
        basic.pause(500)
    }
})
let l_p_led: neopixel.Strip = null
let prava_led: neopixel.Strip = null
let leva_led: neopixel.Strip = null
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
let pasek_led = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
leva_led = pasek_led.range(0, 1)
prava_led = pasek_led.range(1, 1)
l_p_led = pasek_led.range(0, 2)
