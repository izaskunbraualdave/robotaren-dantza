DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
    basic.pause(1000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
    basic.pause(1000)
})
