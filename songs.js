function zeldaTheme() {
    return [
        // 5
        newTimedNote(Note.A, 4, 1.000),
        newTimedNote(Note.E, 4, 1.000 * 1.5),
        newTimedNote(Note.A, 4, 0.500),
        newTimedNote(Note.A, 4, 0.250),
        newTimedNote(Note.B, 4, 0.250),
        newTimedNote(Note.CSh, 5, 0.250),
        newTimedNote(Note.D, 5, 0.250),

        // 6
        newTimedNote(Note.E, 5, 1),
        newPause(0.500),
        newTimedNote(Note.E, 5, 0.500),
        newTimedNote(Note.E, 5, 1.000 / 3),
        newTimedNote(Note.F, 5, 1.000 / 3),
        newTimedNote(Note.G, 5, 1.000 / 3),

        // 7
        newTimedNote(Note.A, 5, 1),
        newPause(0.500),
        newTimedNote(Note.A, 5, 0.500),
        newTimedNote(Note.A, 5, 1.000 / 3),
        newTimedNote(Note.G, 5, 1.000 / 3),
        newTimedNote(Note.F, 5, 1.000 / 3),

        // 8
        newTimedNote(Note.G, 5, 0.500 * 1.5),
        newTimedNote(Note.F, 5, 0.250),
        newTimedNote(Note.E, 5, 2.000),
        newTimedNote(Note.E, 5, 1.000),

        // 9
        newTimedNote(Note.D, 5, 0.500),
        newTimedNote(Note.D, 5, 0.250),
        newTimedNote(Note.E, 5, 0.250),
        newTimedNote(Note.F, 5, 2.000),
        newTimedNote(Note.E, 5, 0.500),
        newTimedNote(Note.D, 5, 0.500),

        // 10
        newTimedNote(Note.C, 5, 0.500),
        newTimedNote(Note.C, 5, 0.250),
        newTimedNote(Note.D, 5, 0.250),
        newTimedNote(Note.E, 5, 2.000),
        newTimedNote(Note.D, 5, 0.500),
        newTimedNote(Note.C, 5, 0.500),

        // 11
        newTimedNote(Note.B, 4, 0.500),
        newTimedNote(Note.B, 4, 0.250),
        newTimedNote(Note.CSh, 5, 0.250),
        newTimedNote(Note.DSh, 5, 2.000),
        newTimedNote(Note.FSh, 5, 1.000),

        // 12
        newTimedNote(Note.E, 5, 0.500),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.500),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.500),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.500),
        newTimedNote(Note.E, 4, 0.500),

        // 13
        newTimedNote(Note.A, 4, 1.000),
        newTimedNote(Note.E, 4, 1.000 * 1.5),
        newTimedNote(Note.A, 4, 0.500),
        newTimedNote(Note.A, 4, 0.250),
        newTimedNote(Note.B, 4, 0.250),
        newTimedNote(Note.CSh, 5, 0.250),
        newTimedNote(Note.D, 5, 0.250),
    ]
}

function marioTheme() {
    return [
        newTimedNote(Note.C, 5, 0.250),
        newPause(0.125),
        newTimedNote(Note.G, 4, 0.250),
        newPause(0.125),
        newTimedNote(Note.E, 4, 0.250),

        newPause(0.125),
        newTimedNote(Note.A, 4, 0.250),
        newTimedNote(Note.B, 4, 0.250),
        newTimedNote(Note.ASh, 4, 0.125),
        newTimedNote(Note.A, 4, 0.250),

        newTimedNote(Note.G, 4, 0.500 / 3),
        newTimedNote(Note.E, 5, 0.500 / 3),
        newTimedNote(Note.G, 5, 0.500 / 3),
        newTimedNote(Note.A, 5, 0.250),
        newTimedNote(Note.F, 5, 0.125),
        newTimedNote(Note.G, 5, 0.125),
    ]
}
