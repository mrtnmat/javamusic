function zeldaTheme() {
    return [
        newTimedNote(Note.A, 4, 1 / 1),
        newTimedNote(Note.E, 4, (1 / 1) * 1.5),
        newTimedNote(Note.A, 4, 1 / 2),
        newTimedNote(Note.A, 4, 1 / 4),
        newTimedNote(Note.B, 4, 1 / 4),
        newTimedNote(Note.CSh, 5, 1 / 4),
        newTimedNote(Note.D, 5, 1 / 4),

        newTimedNote(Note.E, 5, 2 / 1),
        newPause(1 / 2),
        newTimedNote(Note.E, 5, 1 / 2),
        newTimedNote(Note.E, 5, (1 / 1) / 3),
        newTimedNote(Note.F, 5, (1 / 1) / 3),
        newTimedNote(Note.G, 5, (1 / 1) / 3),

        newTimedNote(Note.A, 5, 1),
        newPause(0.250),
        newTimedNote(Note.A, 5, 0.250),
        newTimedNote(Note.A, 5, 0.500 / 3),
        newTimedNote(Note.G, 5, 0.500 / 3),
        newTimedNote(Note.F, 5, 0.500 / 3),

        newTimedNote(Note.G, 5, 0.250 * 1.5),
        newTimedNote(Note.F, 5, 0.125),
        newTimedNote(Note.E, 5, 1.000),
        newTimedNote(Note.E, 5, 0.500),

        newTimedNote(Note.D, 5, 0.250),
        newTimedNote(Note.D, 5, 0.125),
        newTimedNote(Note.E, 5, 0.125),
        newTimedNote(Note.F, 5, 1.000),
        newTimedNote(Note.E, 5, 0.250),
        newTimedNote(Note.D, 5, 0.250),

        newTimedNote(Note.C, 5, 0.250),
        newTimedNote(Note.C, 5, 0.125),
        newTimedNote(Note.D, 5, 0.125),
        newTimedNote(Note.E, 5, 1.000),
        newTimedNote(Note.D, 5, 0.250),
        newTimedNote(Note.C, 5, 0.250),

        newTimedNote(Note.B, 4, 0.250),
        newTimedNote(Note.B, 4, 0.125),
        newTimedNote(Note.CSh, 5, 0.125),
        newTimedNote(Note.DSh, 5, 1.000),
        newTimedNote(Note.FSh, 5, 0.500),

        newTimedNote(Note.E, 5, 0.250),
        newTimedNote(Note.E, 4, 0.125),
        newTimedNote(Note.E, 4, 0.125),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.125),
        newTimedNote(Note.E, 4, 0.125),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.125),
        newTimedNote(Note.E, 4, 0.125),
        newTimedNote(Note.E, 4, 0.250),
        newTimedNote(Note.E, 4, 0.250),
    ]
}

function marioTheme() {
    function intro() {
        return [
            //1
            newTimedNote(Note.E, 5, 1 / 2),
            newTimedNote(Note.E, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.E, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.E, 5, 1 / 1),

            // 2
            newTimedNote(Note.G, 5, 1 / 1),
            newPause(1 / 1),
            newTimedNote(Note.G, 4, 1 / 1),
            newPause(1 / 1),
        ]

    }
    function firstPhrase() {
        return [
            // 3
            newTimedNote(Note.C, 5, 1 / 1),
            newPause(1 / 2),
            newTimedNote(Note.G, 4, 1 / 1),
            newPause(1 / 2),
            newTimedNote(Note.E, 4, 1 / 1),

            // 4
            newPause(1 / 2),
            newTimedNote(Note.A, 4, 1 / 1),
            newTimedNote(Note.B, 4, 1 / 1),
            newTimedNote(Note.ASh, 4, 1 / 2),
            newTimedNote(Note.A, 4, 1 / 1),

            // 5
            newTimedNote(Note.G, 4, 2 / 3),
            newTimedNote(Note.E, 5, 2 / 3),
            newTimedNote(Note.G, 5, 2 / 3),
            newTimedNote(Note.A, 5, 1 / 1),
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.G, 5, 1 / 2),

            // 6
            newPause(1 / 2),
            newTimedNote(Note.E, 5, 1 / 1),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.D, 5, 1 / 2),
            newTimedNote(Note.B, 4, 1 / 1),
            newPause(1 / 2),
        ]
    }
    function secondPhrase() {
        return [
            // 7
            newPause(1 / 1),
            newTimedNote(Note.G, 5, 1 / 2),
            newTimedNote(Note.FSh, 5, 1 / 2),
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.DSh, 5, 1 / 1),
            newTimedNote(Note.E, 5, 1 / 2),

            // 8
            newPause(1 / 2),
            newTimedNote(Note.GSh, 4, 1 / 2),
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.D, 5, 1 / 2),

            // 9
            newPause(1 / 1),
            newTimedNote(Note.G, 5, 1 / 2),
            newTimedNote(Note.FSh, 5, 1 / 2),
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.DSh, 5, 1 / 1),
            newTimedNote(Note.E, 5, 1 / 2),

            // 10
            newPause(1 / 2),
            newTimedNote(Note.G, 4, 1 / 2),
            newTimedNote(Note.G, 4, 1 / 2),
            newTimedNote(Note.G, 4, 1 / 2),
            newPause(1 / 1),

            // 11
            newPause(1 / 1),
            newTimedNote(Note.G, 5, 1 / 2),
            newTimedNote(Note.FSh, 5, 1 / 2),
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.DSh, 5, 1 / 1),
            newTimedNote(Note.E, 5, 1 / 2),

            // 12
            newPause(1 / 2),
            newTimedNote(Note.GSh, 4, 1 / 2),
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.D, 5, 1 / 2),

            // 13
            newPause(1 / 1),
            newTimedNote(Note.DSh, 5, 1 / 1),
            newPause(1 / 2),
            newTimedNote(Note.D, 5, 1 / 1),
            newPause(1 / 2),

            // 14
            newTimedNote(Note.C, 5, 1 / 1),
            newPause(1 / 2),
            newTimedNote(Note.G, 4, 1 / 2),
            newTimedNote(Note.G, 4, 1 / 1),
            newTimedNote(Note.C, 4, 1 / 1),
        ]
    }
    function thirdPhrase() {

        return [        // 15
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.D, 5, 1 / 1),

            // 16
            newTimedNote(Note.E, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.G, 4, 2 / 1),

            // 17
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.D, 5, 1 / 2),
            newTimedNote(Note.E, 5, 1 / 2),

            /*
            // 18
            newTimedNote(Note.G, 3, 1 / 1),
            newPause(1 / 2),
            newTimedNote(Note.C, 3, 1 / 2),
            newPause(1 / 1),
            newTimedNote(Note.G, 2, 1 / 1),
            */

            // 18
            newPause(4 / 1),

            // 19
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.E, 5, 1 / 1),

            // 20
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.G, 4, 2 / 1),

            // 21
            newTimedNote(Note.E, 5, 1 / 2),
            newTimedNote(Note.E, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.E, 5, 1 / 2),
            newPause(1 / 2),
            newTimedNote(Note.C, 5, 1 / 2),
            newTimedNote(Note.E, 5, 1 / 1),

            // 22
            newTimedNote(Note.G, 5, 1 / 1),
            newPause(1 / 1),
            newTimedNote(Note.G, 4, 1 / 1),
            newPause(1 / 1),
        ]
    }
    function fourthPhrase() {
        return [
            // 27
            newTimedNote(Note.E, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 1),
            newTimedNote(Note.G, 4, 1 / 2),
            newPause(1 / 1),
            newTimedNote(Note.GSh, 4, 1 / 1),

            // 28
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.F, 5, 1 / 1),
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.A, 4, 1 / 1),
            newPause(1 / 1),

            // 29
            newTimedNote(Note.B, 4, 2 / 3),
            newTimedNote(Note.A, 5, 2 / 3),
            newTimedNote(Note.A, 5, 2 / 3),
            newTimedNote(Note.A, 5, 2 / 3),
            newTimedNote(Note.G, 5, 2 / 3),
            newTimedNote(Note.F, 5, 2 / 3),

            // 30
            newTimedNote(Note.E, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 1),
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.G, 4, 1 / 1),
            newPause(1 / 1),

            // 31
            newTimedNote(Note.E, 5, 1 / 2),
            newTimedNote(Note.C, 5, 1 / 1),
            newTimedNote(Note.G, 4, 1 / 2),
            newPause(1 / 1),
            newTimedNote(Note.GSh, 4, 1 / 1),

            // 32
            newTimedNote(Note.A, 4, 1 / 2),
            newTimedNote(Note.F, 5, 1 / 1),
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.A, 4, 1 / 1),
            newPause(1 / 1),

            // 33
            newTimedNote(Note.B, 4, 1 / 2),
            newTimedNote(Note.F, 5, 1 / 1),
            newTimedNote(Note.F, 5, 1 / 2),
            newTimedNote(Note.F, 5, 2 / 3),
            newTimedNote(Note.E, 5, 2 / 3),
            newTimedNote(Note.D, 5, 2 / 3),

            // 34
            newTimedNote(Note.G, 4, 1 / 2),
            newTimedNote(Note.E, 4, 1 / 1),
            newTimedNote(Note.E, 4, 1 / 2),
            newTimedNote(Note.C, 4, 1 / 1),
        ]
    }
    return intro()
        .concat(firstPhrase())
        .concat(firstPhrase())
        .concat(secondPhrase())
        .concat(secondPhrase())
        .concat(thirdPhrase())
        .concat(firstPhrase())
        .concat(firstPhrase())
        .concat(fourthPhrase())
        .concat(fourthPhrase())
}
