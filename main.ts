let afstand = 0
basic.forever(function () {
    afstand = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
    if (afstand > 15) {
        music.stopAllSounds()
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 101)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        music.ringTone(100 * afstand)
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 93)
    }
})
