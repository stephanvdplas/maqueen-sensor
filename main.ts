let afstand = 0
music.setVolume(60)
basic.forever(function () {
    afstand = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
    if (afstand > 15) {
        basic.showNumber(afstand)
        music.stopAllSounds()
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        music.playTone(75 * afstand, music.beat(BeatFraction.Quarter))
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 150)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 25)
    }
})
