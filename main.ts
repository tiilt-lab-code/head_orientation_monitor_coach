input.onButtonPressed(Button.A, function () {
    basic.showNumber(avg_dtime)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallSquare)
    datalogger.log(
    datalogger.createCV("dtime", avg_dtime),
    datalogger.createCV("datapoints", data_points)
    )
    data_points = 0
    avg_dtime = 0
    radio.sendString("head_tilt_reset")
})
radio.onReceivedValue(function (name, value) {
    if (name == "dtime") {
        basic.showIcon(IconNames.Square)
        music.playTone(262, music.beat(BeatFraction.Whole))
        temp = value + avg_dtime * data_points
        data_points += 1
        avg_dtime = temp / data_points
    }
})
let temp = 0
let avg_dtime = 0
let data_points = 0
radio.setGroup(72)
data_points = 0
avg_dtime = 0
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
