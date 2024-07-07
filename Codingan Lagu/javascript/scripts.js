function selectSong() {
    const selectedSong = document.getElementById("song-selector").value;
    const audioPlayer = document.getElementById('audio-player');

    if (selectedSong === 'iwannabeyours') {
        audioPlayer.src = 'music/I Wanna Be Yours.mp3'; 
        audioPlayer.load(); 
        loadLyrics(); 
    } else {
        audioPlayer.src = ''; 
        document.getElementById('lyrics').innerText = 'Lyrics not available.';
    }
}

function loadLyrics() {
    const lyricsData = [
        { time: 18, text: "I wanna be your vacuum cleaner" },
        { time: 22, text: "Breathing in your dust" },
        { time: 25, text: "I wanna be your Ford Cortina" },
        { time: 29, text: "I will never rust" },
        { time: 32, text: "If you like your coffee hot" },
        { time: 36, text: "Let me be your coffee pot" },
        { time: 39, text: "You call the shots, babe" },
        { time: 42, text: "I just wanna be yours" },
        { time: 46, text: "Secrets I have held in my heart" },
        { time: 50, text: "Are harder to hide than I thought" },
        { time: 53, text: "Maybe I just wanna be yours" },
        { time: 57, text: "I wanna be yours, I wanna be yours" },
        { time: 62, text: "Wanna be yours" },
        { time: 66, text: "Wanna be yours" },
        { time: 69, text: "Wanna be yours" },
        { time: 75, text: "Let me be your leccy meter" },
        { time: 79, text: "And I'll never run out" },
        { time: 81, text: "Let me be the portable heater" },
        { time: 86, text: "That you'll get cold without" },
        { time: 89, text: "I wanna be your setting lotion (wanna be)" },
        { time: 93, text: "Hold your hair in deep devotion (I'll be)" },
        { time: 96, text: "At least as deep as the Pacific Ocean" },
        { time: 96, text: "Now I wanna be yours" },
        { time: 103, text: "Secrets I have held in my heart" },
        { time: 107, text: "Are harder to hide than I thought" },
        { time: 110, text: "Maybe I just wanna be yours" },
        { time: 114, text: "I wanna be yours, I wanna be yours" },
        { time: 119, text: "Wanna be yours" },
        { time: 123, text: "Wanna be yours" },
        { time: 126, text: "Wanna be yours" },
        { time: 130, text: "Wanna be yours" },
        { time: 133, text: "Wanna be yours" },
        { time: 137, text: "Wanna be yours" },
        { time: 140, text: "Wanna be yours" },
        { time: 146, text: "I wanna be your vacuum cleaner (wanna be yours)" },
        { time: 149, text: "Breathing in your dust (wanna be yours)" },
        { time: 153, text: "I wanna be your Ford Cortina (wanna be yours)" },
        { time: 157, text: "I will never rust (wanna be yours)" },
        { time: 160, text: "I just wanna be yours (wanna be yours)" },
        { time: 163, text: "I just wanna be yours (wanna be yours)" },
        { time: 167, text: "I just wanna be yours (wanna be yours)" }
    ];

    const lyricsContainer = document.getElementById('lyrics');
    lyricsContainer.innerHTML = lyricsData.map(lyric => `<span data-time="${lyric.time}">${lyric.text}</span><br>`).join('');

    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.ontimeupdate = () => syncLyrics(lyricsData, audioPlayer.currentTime);
}

function selectSong() {
    const selectedSong = document.getElementById("song-selector").value;
    const audioPlayer = document.getElementById('audio-player');

    if (selectedSong === 'lagu buat efendy') {
        audioPlayer.src = 'music/I Wanna Be Yours.mp3'; 
        audioPlayer.load(); 
        loadLyrics(); 
    } else {
        audioPlayer.src = ''; 
        document.getElementById('lyrics').innerText = 'Lyrics not available.';
    }
}

function loadLyrics() {
    const lyricsData = [
        { time: 0, text: "ketika aku menjalankan studi independen aku bertemu" },
        { time: 5, text: "seorang gadis yang sangat cantik" },
    ]
}

function syncLyrics(lyricsData, currentTime) {
    const lyricsContainer = document.getElementById('lyrics');
    const lyricsSpans = lyricsContainer.querySelectorAll('span');
    let nextLyricTime = null;
    for (let i = 0; i < lyricsData.length; i++) {
        if (lyricsData[i].time > currentTime) {
            nextLyricTime = lyricsData[i].time;
            break;
        }
    }
    lyricsSpans.forEach(span => {
        const lyricTime = parseFloat(span.getAttribute('data-time'));
        if (lyricTime <= currentTime) {
            span.classList.add('highlight');
        } else {
            span.classList.remove('highlight');
        }
    });
    if (nextLyricTime !== null) {
        const nextLyricSpan = lyricsContainer.querySelector(`span[data-time="${nextLyricTime}"]`);
        if (nextLyricSpan) {
            nextLyricSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}
 