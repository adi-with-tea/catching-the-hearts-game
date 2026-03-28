<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:1a0030,50:3d0068,100:1a0030&height=220&text=💗%20Catching%20the%20Hearts&fontSize=42&fontColor=ff79c6&fontAlignY=45&desc=A%20browser%20arcade%20game%20built%20with%20pure%20HTML%20%2B%20CSS%20%2B%20JS&descColor=bd93f9&descAlignY=65&descSize=16&animation=twinkling" width="100%"/>

<br/>

![HTML5](https://img.shields.io/badge/HTML5-Game-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-ff79c6?style=for-the-badge)

<br/>

![Modes](https://img.shields.io/badge/⏱️-3%20Time%20Modes-8be9fd?style=flat-square)
![Sound](https://img.shields.io/badge/🔊-Sound%20Effects-ff79c6?style=flat-square)
![Score](https://img.shields.io/badge/🏆-Best%20Score%20Tracker-f1fa8c?style=flat-square)
![Win Screen](https://img.shields.io/badge/💘-Secret%20Win%20Screen-ff5555?style=flat-square)

<br/>

```
 ♥  ♥    ♥       ♥    ♥  ♥
       ♥     ♥       ♥
 ♥        ♥    ♥        ♥
        [ CATCHER ]
```

*Move your catcher. Catch the hearts. Don't miss.*
*And maybe... just maybe... earn yourself a date. 💘*

<br/>

</div>

---

## 📸 Screenshots

<div align="center">

| Game Screen | Win Screen |
|:-:|:-:|
| ![Game](screenshots/game.png) | ![Win](screenshots/win.png) |

| Mode Select | Game Over |
|:-:|:-:|
| ![Modes](screenshots/modes.png) | ![Gameover](screenshots/gameover.png) |

</div>

> 💡 *Add your screenshots to a `screenshots/` folder to make these render.*

---

## 🎮 How to Play

```
1. Open index.html in any browser
2. Pick your time mode — 15s / 30s / 60s
3. Move the catcher LEFT & RIGHT using your mouse or arrow keys
4. Catch the falling ♥ hearts before they hit the ground
5. Don't miss — every dropped heart costs you!
6. Survive the timer & beat your best score
7. Win big enough... and earn a very special reward 👀
```

---

## ✨ Features

| | Feature | Details |
|---|---|---|
| ⏱️ | **3 Time Modes** | 15 seconds, 30 seconds, or 60 seconds — pick your challenge |
| 🏆 | **Score Tracker** | Live score + personal best tracked per session |
| 🔊 | **Sound Effects** | Catch ting, game over buzzer, and a victory yay |
| 🌤️ | **Sky Background** | Atmospheric backdrop for the falling hearts |
| 💘 | **Secret Win Screen** | A cheeky reward page if you're good enough |
| 🖱️ | **Simple Controls** | Mouse or keyboard — just move and catch |
| 📱 | **No Install Needed** | Open in browser, play instantly — zero setup |

---

## 🗂️ File Structure

```
catching-the-hearts-game/
│
├── index.html        # Main game page — catcher, timer, score UI
├── date.html         # 🔒 Secret win screen (earn it first!)
│
├── script.js         # All game logic — spawning, collision, scoring
├── style.css         # Game layout, catcher, falling hearts styling
│
├── heart.jpg         # Heart graphic asset
├── sky.jpg           # Background image
│
├── ting.mp3          # 🔊 Sound: heart caught
├── yay.mp3           # 🔊 Sound: you won!
└── gameover.mp3      # 🔊 Sound: time's up
```

---

## ⚙️ Getting Started

**No install. No build step. No dependencies.**

### Option 1 — Just open it

```bash
# Clone the repo
git clone https://github.com/adi-with-tea/catching-the-hearts-game.git
cd catching-the-hearts-game

# Open in browser
open index.html         # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

### Option 2 — Live Server *(recommended for best experience)*

If you use VS Code, right-click `index.html` → **Open with Live Server**.

### Option 3 — Play Online

> *Coming soon — deploy via GitHub Pages!*

To deploy yourself:
1. Go to your repo **Settings → Pages**
2. Set source to `main` branch, `/ (root)`
3. Visit `https://adi-with-tea.github.io/catching-the-hearts-game/`

---

## 🕹️ Controls

| Input | Action |
|---|---|
| `←` `→` Arrow Keys | Move catcher left / right |
| Mouse Move | Follow cursor (if mouse support enabled) |
| Click mode button | Start game in 15s / 30s / 60s mode |
| `R` or refresh | Restart the game |

---

## 🔊 Audio Assets

| File | Triggers When |
|---|---|
| `ting.mp3` | A heart is successfully caught |
| `yay.mp3` | You hit the win condition 🎉 |
| `gameover.mp3` | Timer hits zero |

---

## 💘 The Win Screen

Catch enough hearts and the game takes you somewhere special.

The `date.html` page is your reward — a little surprise the developer left for winners. We won't spoil it. Go earn it. 👀

---

## 🤝 Contributing

It's a fun little project — contributions welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-idea`
3. Commit: `git commit -m "Add power-ups"`
4. Push: `git push origin feature/your-idea`
5. Open a Pull Request

**Ideas for future features:**
- Difficulty levels (slow / fast / chaotic heart speeds)
- Combo multipliers for consecutive catches
- Mobile touch controls
- Global leaderboard
- More secret ending screens 👀

---

## 📄 License

Open source — feel free to fork, remix, and share.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:1a0030,50:3d0068,100:1a0030&height=120&text=catch%20hearts.%20not%20feelings.&fontSize=20&fontColor=ff79c6&fontAlignY=52&section=footer" width="100%"/>

<br/>

Made with 💗 by **[adi-with-tea](https://github.com/adi-with-tea)**

⭐ Star this repo if it made you smile!

</div>
