const ctx = new AudioContext()
const c0 = 16.35

function newSound(type, freq) {
    const oscillator = ctx.createOscillator();
    oscillator.type = type;
    oscillator.frequency.value = freq;
    return oscillator
}

function playSound(osc, start, length) {
    osc.connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + length)
}

const Note = {
    C: 0,
    CSh: 1,
    D: 2,
    DSh: 3,
    E: 4,
    F: 5,
    FSh: 6,
    G: 7,
    GSh: 8,
    A: 9,
    ASh: 10,
    B: 11,
}

function beatLength(bpm) {
    return 1 / (bpm / 60)
}

function newNote(type, note, octave) {
    const a = Math.pow(2, 1 / 12)
    const distance = octave * 12 + note
    const freq = c0 * Math.pow(a, distance)
    return newSound(type, freq)
}

function newTimedNote(note, octave, duration) {
    return {
        pause: false,
        note: newNote('square', note, octave),
        duration: duration,
    }
}

function newPause(duration) {
    return {
        pause: true,
        duration: duration,
    }
}

function playMelody(melody, starttime = 0, bpm = 180) {
    let time = starttime
    let b = beatLength(bpm)
    melody.forEach(nt => {
        let dur = b * nt.duration
        if (!nt.pause) {
            playSound(nt.note, time, dur)
        }
        time += dur
    });
    return time
}

function loopMelody(melodyFn, n = 1, time = 0) {
    if (n < 1) {
        return
    }
    loopMelody(melodyFn, n - 1, playMelody(melodyFn(), time))
}
