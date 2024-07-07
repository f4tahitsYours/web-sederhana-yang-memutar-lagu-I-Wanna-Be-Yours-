# web-sederhana-yang-memutar-lagu-I-Wanna-Be-Yours-

Berikut adalah dokumentasi untuk proyek Anda:

## Dokumentasi Proyek

### Deskripsi Proyek
Proyek ini adalah halaman web sederhana yang memutar lagu "I Wanna Be Yours" dan menampilkan lirik yang disinkronkan dengan waktu. Pengguna dapat memilih lagu dari dropdown dan melihat lirik muncul secara sinkron saat lagu diputar.

### Struktur Folder
```
|-- index.html
|-- javascript/
|   |-- scripts.js
|-- music/
|   |-- I Wanna Be Yours.mp3
|-- style/
    |-- styles.css
```

### File dan Kode

#### 1. `index.html`

File `index.html` adalah halaman utama proyek yang berisi struktur HTML dasar, termasuk elemen-elemen untuk memilih lagu, memutar audio, dan menampilkan lirik.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I Wanna Be Yours</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/styles.css">
</head>
<body>
    <div class="container">
        <h1 class="romantic-title">I Wanna Be Yours</h1>
        <div class="form-group">
            <label for="song-selector">Pilih Lagu:</label>
            <select class="form-control" id="song-selector" onchange="selectSong()">
                <option value="" disabled selected>Pilih Lagu</option>
                <option value="iwannabeyours">I Wanna Be Yours</option>
            </select>
        </div>
        <audio id="audio-player" controls></audio>
        <div id="lyrics-container">
            <p id="lyrics"></p>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="javascript/scripts.js"></script>
</body>
</html>
```

#### 2. `javascript/scripts.js`

File `scripts.js` berisi kode JavaScript yang bertanggung jawab untuk memilih lagu, memuat lirik, dan menyinkronkan lirik dengan waktu lagu.

```javascript
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
```

#### 3. `style/styles.css`

File `styles.css` berisi kode CSS yang mengatur gaya tampilan halaman web.

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    margin-top: 50px;
}

.romantic-title {
    text-align: center;
    color: #FF6F61;
    font-family: 'Brush Script MT', cursive;
    font-size: 2.5em;
    margin-bottom: 20px;
}

#lyrics-container {
    margin-top: 20px;
}

#lyrics span.highlight {
    background-color: yellow;
}
```

### Instruksi Penggunaan

1. **Buka Halaman Web:**
   Buka file `index.html` di browser Anda.

2. **Pilih Lagu:**
   Gunakan dropdown untuk memilih lagu "I Wanna Be Yours".

3. **Putar Lagu:**
   Lagu akan mulai diputar dan lirik akan muncul di bawah kontrol audio. Lirik akan disinkronkan dengan waktu lagu.

### Catatan

- **Lagu:**
  Pastikan file lagu `I Wanna Be Yours.mp3` ada di folder `music`.

- **Sinkronisasi Lirik:**
  Lirik di `scripts.js` disesuaikan dengan waktu lagu dalam hitungan detik. Anda dapat mengubah waktu atau teks l
