/* Aurora Arcade catalogue — 38 games. Add a game here and it appears
   everywhere: grid, search, categories, related. */

const GAMES = [
  {
    "id": "geometry-dash",
    "title": "Geometry Dash",
    "embed": "https://brainworxedu.github.io/games/geometry-dash.html",
    "tags": [
      "Action"
    ],
    "tagline": "One touch. One cube. Endless rhythm.",
    "desc": "Jump and fly your way through danger in this rhythm-based action platformer. Time every tap to the beat — one mistake sends you back to the start.",
    "controls": [
      "Space / Up — jump",
      "Click or tap — jump",
      "Hold — keep jumping"
    ],
    "thumb": "assets/thumbs/geometry-dash.jpg"
  },
  {
    "id": "granny",
    "title": "Granny",
    "embed": "https://brainworxedu.github.io/games/granny.html",
    "tags": [
      "Action"
    ],
    "tagline": "Five days. One house. Don't make a sound.",
    "desc": "You are locked in a house with Granny. She hears everything. Find the objects, solve the puzzles and escape before your fifth day runs out.",
    "controls": [
      "W A S D — move",
      "Mouse — look",
      "Shift — sprint",
      "E — interact"
    ],
    "thumb": "assets/thumbs/granny.jpg"
  },
  {
    "id": "people-playground",
    "title": "People Playground",
    "embed": "https://brainworxedu.github.io/games/people-playground.html",
    "tags": [
      "Sandbox"
    ],
    "tagline": "Build a scene. See what physics does to it.",
    "desc": "A physics sandbox with ragdolls, contraptions and a very permissive imagination. No objective, no score — just cause, effect and the tools to connect them.",
    "controls": [
      "Left drag — grab",
      "Right drag — pan",
      "Scroll — zoom",
      "Space — pause"
    ],
    "thumb": "assets/thumbs/people-playground.jpg"
  },
  {
    "id": "gamble-with-your-friends",
    "title": "Gamble With Your Friends",
    "embed": "https://brainworxedu.github.io/games/gamble-with-your-friends.html",
    "tags": [
      "Multiplayer"
    ],
    "tagline": "Luck is a game mechanic. So is betrayal.",
    "desc": "A chaotic multiplayer party game about pushing your luck and talking your friends into worse decisions. Spin, bet, and watch the consequences land.",
    "controls": [
      "Mouse — choose and bet",
      "Enter — confirm"
    ],
    "thumb": "assets/thumbs/gamble-with-your-friends.jpg"
  },
  {
    "id": "how-to-fish",
    "title": "How to Fish",
    "embed": "https://brainworxedu.github.io/games/how-to-fish.html",
    "tags": [
      "Casual"
    ],
    "tagline": "Cast. Wait. Regret the waiting.",
    "desc": "A laid-back fishing sim with an unpredictable streak. Cast your line, take what bites, and see how long the calm actually lasts.",
    "controls": [
      "Mouse — aim and cast",
      "Click — reel",
      "Esc — menu"
    ],
    "thumb": "assets/thumbs/how-to-fish.jpg"
  },
  {
    "id": "60-seconds",
    "title": "60 Seconds",
    "embed": "https://brainworxedu.github.io/games/60-seconds.html",
    "tags": [
      "Survival"
    ],
    "tagline": "One minute to grab what matters. Then survive the fallout.",
    "desc": "You get sixty seconds to raid your house before the blast lands. Take the wrong things and your family doesn't make it. Take the right ones and the hard part begins — water, food, and four people in a bunker built for two.",
    "controls": [
      "W A S D / Arrows — move",
      "Mouse — grab and drag items into the shelter",
      "Click — interact, confirm",
      "Esc — pause"
    ],
    "thumb": "assets/thumbs/60-seconds.jpg"
  },
  {
    "id": "fnf-legacy",
    "title": "Friday Night Funkin' VS Impostor Legacy",
    "embed": "https://game.fnfhub.net/30465/",
    "tags": [
      "Rhythm"
    ],
    "tagline": "Rap-battle the crewmates. Miss a note and it's over.",
    "desc": "Rhythm battles against the Impostor crew. Hit every arrow on the beat to out-sing your opponent — miss too many and the song cuts you off. Arrow keys or WASD, one key per note, timing is everything.",
    "controls": [
      "Arrow keys / W A S D — hit the notes",
      "Enter — confirm, restart",
      "Esc — pause",
      "Better on desktop; arrow keys need a physical keyboard"
    ],
    "thumb": "assets/thumbs/fnf-legacy.jpg"
  },
  {
    "id": "minecraft-1-20-6",
    "title": "Minecraft 1.20.6",
    "embed": "https://brainworxedu.github.io/games/minecraft-1-20-6.html",
    "tags": [
      "Sandbox"
    ],
    "tagline": "Mine, craft, and build. The whole world is yours to take apart.",
    "desc": "The full voxel sandbox, playable in your browser. Dig for resources, craft your tools, build whatever you can imagine — and try not to fall into your own mine shaft. Survival or creative, your call.",
    "controls": [
      "W A S D — move",
      "Mouse — look around",
      "Space — jump",
      "Left click — mine / attack",
      "Right click — place block / use",
      "E — inventory",
      "Shift — sneak",
      "1–9 — select hotbar slot"
    ],
    "thumb": "assets/thumbs/minecraft-1-20-6.jpg"
  },
  {
    "id": "skate-3",
    "title": "Skate 3",
    "embed": "https://brainworxedu.github.io/games/skate-3.html",
    "tags": [
      "Sports",
      "Skating"
    ],
    "tagline": "Hit the streets, land tricks, and skate through the city.",
    "desc": "Skate around and practice tricks in this skateboarding game.",
    "controls": [
      "W A S D — steer and move",
      "Arrow keys — tricks",
      "Space — action / jump (game dependent)",
      "Esc — pause (if supported)"
    ],
    "thumb": "assets/thumbs/skate-3.jpg"
  },
  {
    "id": "cuphead",
    "title": "Cuphead",
    "embed": "https://brainworxedu.github.io/games/cuphead.html",
    "tags": [
      "Action",
      "Run & Gun"
    ],
    "tagline": "Take on cartoon-inspired boss battles in a hand-drawn world.",
    "desc": "Play through a run-and-gun adventure with imaginative levels and demanding boss battles.",
    "controls": [
      "Move — W A S D or arrow keys",
      "Jump, dash, shoot, and switch weapons — follow the in-game prompts",
      "Click the game area first if keyboard input does not respond"
    ],
    "thumb": "assets/thumbs/cuphead.jpg"
  },
  {
    "id": "clustertruck",
    "title": "Clustertruck",
    "embed": "https://brainworxedu.github.io/games/clustertruck.html",
    "tags": [
      "Action",
      "Platformer"
    ],
    "tagline": "Leap across speeding trucks, dodge hazards, and race to the finish.",
    "desc": "Race across moving trucks in a fast-paced first-person platforming challenge.",
    "controls": [
      "WASD / arrow keys — move (if supported)",
      "Space — jump (if supported)",
      "Mouse — look around (if supported)"
    ],
    "thumb": "assets/thumbs/clustertruck.jpg"
  },
  {
    "id": "terraria",
    "title": "Terraria",
    "embed": "https://brainworxedu.github.io/games/terraria.html",
    "tags": [
      "Adventure",
      "Sandbox"
    ],
    "tagline": "Explore a pixel-art world, gather resources, build, and battle creatures.",
    "desc": "Mine materials, discover new areas, craft gear, build shelters, and take on enemies.",
    "controls": [
      "W A S D or arrow keys — move (if supported)",
      "Mouse — aim, mine, build, and interact (if supported)",
      "Use the in-game instructions for the exact controls"
    ],
    "thumb": "assets/thumbs/terraria.jpg"
  },
  {
    "id": "deltarune",
    "title": "DELTARUNE",
    "embed": "https://brainworxedu.github.io/games/deltarune.html",
    "tags": [
      "RPG",
      "Adventure"
    ],
    "tagline": "Explore a strange world, meet unusual characters, and battle with your party.",
    "desc": "Explore, talk to characters, solve encounters, and progress through a story-driven RPG adventure.",
    "controls": [
      "Arrow keys or WASD — move (if supported)",
      "Z / Enter — confirm (if supported)",
      "X / Shift — cancel or run (if supported)",
      "Use the in-game instructions for exact controls"
    ],
    "thumb": "assets/thumbs/deltarune.jpg"
  },
  {
    "id": "hollow-knight-silksong",
    "title": "Hollow Knight: Silksong",
    "embed": "https://brainworxedu.github.io/games/hollow-knight-silksong.html",
    "tags": [
      "Action",
      "Platformer"
    ],
    "tagline": "Guide Hornet through a dangerous, mysterious kingdom.",
    "desc": "Play as Hornet in a hand-crafted kingdom filled with enemies, secrets, and platforming challenges.",
    "controls": [
      "Move, jump, dash, and attack — follow the in-game prompts",
      "Click the game area first if keyboard input does not respond",
      "Exact key bindings may vary by hosted build"
    ],
    "thumb": "assets/thumbs/hollow-knight-silksong.jpg"
  },
  {
    "id": "la-madriguera",
    "title": "La Madriguera",
    "embed": "https://brainworxedu.github.io/games/la-madriguera.html",
    "tags": [
      "Adventure",
      "Indie"
    ],
    "tagline": "Step into La Madriguera and discover what awaits inside this atmospheric adventure.",
    "desc": "Discover the world of La Madriguera in this atmospheric indie experience.",
    "controls": [
      "W A S D or arrow keys — move (if supported)",
      "Mouse — interact or look around (if supported)",
      "Use the in-game instructions for the exact controls"
    ],
    "thumb": "assets/thumbs/la-madriguera.jpg"
  },
  {
    "id": "tloz",
    "title": "The Legend of Zelda",
    "embed": "https://clever.luluschool.world/gamefile/tloz.html",
    "tags": [
      "Adventure",
      "Action"
    ],
    "tagline": "A kingdom in peril and a hero with a sword.",
    "desc": "Explore dungeons, solve puzzles and fight your way through a classic adventure.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/tloz.jpg"
  },
  {
    "id": "wallkickers",
    "title": "Wall Kickers",
    "embed": "https://clever.luluschool.world/games/wallkickers/index.html",
    "tags": [
      "Platformer",
      "Casual"
    ],
    "tagline": "Cling to the wall. Kick off. Don't stop climbing.",
    "desc": "A one-button climbing game. Leap between walls, keep your momentum, and see how far up you get before you fall.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/wallkickers.jpg"
  },
  {
    "id": "sms",
    "title": "Super Mario Sunshine",
    "embed": "https://clever.luluschool.world/games/sms/index.html",
    "tags": [
      "Platformer",
      "Adventure"
    ],
    "tagline": "A holiday ruined, an island to clean up.",
    "desc": "Clean up a sun-soaked island with a water-powered jetpack. Bright, bouncy platforming.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/sms.jpg"
  },
  {
    "id": "smg",
    "title": "Super Mario Galaxy",
    "embed": "https://clever.luluschool.world/games/smg/index.html",
    "tags": [
      "Platformer",
      "Adventure"
    ],
    "tagline": "Gravity is optional. The stars are not.",
    "desc": "Run, jump and spin across tiny planets where gravity points wherever it likes.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/smg.jpg"
  },
  {
    "id": "ssf",
    "title": "Super Smash Flash",
    "embed": "https://clever.luluschool.world/gamefile/ssf.html",
    "tags": [
      "Fighting",
      "Multiplayer"
    ],
    "tagline": "Nintendo icons throw down in a browser brawler.",
    "desc": "A fan-made Smash-style fighter. Pick a character and battle across stages.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/ssf.jpg"
  },
  {
    "id": "ssf2",
    "title": "Super Smash Flash 2",
    "embed": "https://clever.luluschool.world/gamefile/ssf2.html",
    "tags": [
      "Fighting",
      "Multiplayer"
    ],
    "tagline": "The bigger, louder sequel — full roster, full chaos.",
    "desc": "A much larger Smash Flash — a big roster, more stages, and proper multiplayer modes.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/ssf2.jpg"
  },
  {
    "id": "ffvii",
    "title": "Final Fantasy VII",
    "embed": "https://clever.luluschool.world/gamefile/ffvii.html",
    "tags": [
      "RPG",
      "Adventure"
    ],
    "tagline": "The one with the sword, the flower girl and the planet.",
    "desc": "A landmark RPG. Assemble your party, level up, and follow a story that changed the genre.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/ffvii.jpg"
  },
  {
    "id": "goi",
    "title": "Getting Over It",
    "embed": "https://clever.luluschool.world/gamefile/goi.html",
    "tags": [
      "Platformer",
      "Casual"
    ],
    "tagline": "A man, a hammer, and an unfair mountain.",
    "desc": "Climb a mountain with a hammer and a pot. You will fall. You will start again.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/goi.jpg"
  },
  {
    "id": "sonic2",
    "title": "Sonic the Hedgehog 2",
    "embed": "https://clever.luluschool.world/games/sonic2/index.html",
    "tags": [
      "Platformer",
      "Action"
    ],
    "tagline": "Spins, tails and a whole lot of rings.",
    "desc": "Speed through zones as Sonic and Tails, collect rings, and beat Robotnik to the end.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/sonic2.jpg"
  },
  {
    "id": "sonic",
    "title": "Sonic the Hedgehog",
    "embed": "https://clever.luluschool.world/games/sonic/index.html",
    "tags": [
      "Platformer",
      "Action"
    ],
    "tagline": "Gotta go fast. The original, in your browser.",
    "desc": "The original loop-de-loop platformer that made going fast a personality trait.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/sonic.jpg"
  },
  {
    "id": "shucksv2",
    "title": "FNF: Shucks v2",
    "embed": "https://clever.luluschool.world/games/fnf/shucksv2.html",
    "tags": [
      "Rhythm",
      "Horror"
    ],
    "tagline": "A horror-flavoured FNF week. Sing or get got.",
    "desc": "A Friday Night Funkin' mod week with a horror edge. Hit every note on the beat or the song ends you.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/shucksv2.jpg"
  },
  {
    "id": "hex",
    "title": "FNF: Hex",
    "embed": "https://clever.luluschool.world/games/fnf/hex.html",
    "tags": [
      "Rhythm",
      "Music"
    ],
    "tagline": "Basketball robot, full week, one mic.",
    "desc": "A full-week FNF mod against Hex, the basketball-playing robot. Fast charts, bright colours, one note per key.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/hex.jpg"
  },
  {
    "id": "houseofhazards",
    "title": "House of Hazards",
    "embed": "https://clever.luluschool.world/games/houseofhazards/index.html",
    "tags": [
      "Party",
      "Casual"
    ],
    "tagline": "A house full of traps and friends to shove into them.",
    "desc": "A chaotic local party game. Race through a house rigged with traps and ruin your friends' run on the way.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/houseofhazards.jpg"
  },
  {
    "id": "vicecity",
    "title": "GTA: Vice City",
    "embed": "https://clever.luluschool.world/games/vicecity/index.html",
    "tags": [
      "Action",
      "Open World"
    ],
    "tagline": "Neon, palm trees and trouble in the 80s.",
    "desc": "The 1980s open-world classic. Drive the neon streets, take the jobs, build the empire.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/vicecity.jpg"
  },
  {
    "id": "gtasan",
    "title": "GTA: San Andreas",
    "embed": "https://clever.luluschool.world/games/gtasan/index.html",
    "tags": [
      "Action",
      "Open World"
    ],
    "tagline": "A whole state, a bicycle and a very long story.",
    "desc": "The biggest of the classic GTA games. Three cities, a huge map, and a story that goes everywhere.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/gtasan.jpg"
  },
  {
    "id": "bbp",
    "title": "Bad Baby Puncher",
    "embed": "https://clever.luluschool.world/gamefile/bbp.html",
    "tags": [
      "Action",
      "Casual"
    ],
    "tagline": "It is exactly what the title says.",
    "desc": "A short, silly browser brawler. Punch the baby. That is the whole game.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/bbp.jpg"
  },
  {
    "id": "cookie-clicker",
    "title": "Cookie Clicker",
    "embed": "https://clever.luluschool.world/games/cookie-clicker/index.html",
    "tags": [
      "Idle",
      "Casual"
    ],
    "tagline": "Click the cookie. Buy the upgrade. Lose the evening.",
    "desc": "The idle game that ate the internet. Click the big cookie for points, spend them on upgrades, and let production run itself.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/cookie-clicker.jpg"
  },
  {
    "id": "fnaf",
    "title": "Five Nights at Freddy's",
    "embed": "https://clever.luluschool.world/games/fnaf/index.html",
    "tags": [
      "Horror",
      "Survival"
    ],
    "tagline": "Five nights. Four animatronics. One door that will not hold.",
    "desc": "You are the night guard. Watch the cameras, ration the power, close the doors, and try to survive until 6 AM.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/fnaf.jpg"
  },
  {
    "id": "fnaf4",
    "title": "FNAF 4",
    "embed": "https://clever.luluschool.world/games/fnaf4/index.html",
    "tags": [
      "Horror",
      "Survival"
    ],
    "tagline": "The one where the house is the monster.",
    "desc": "No cameras and no office. Just a bedroom, a bed, a torch and something in the hall.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/fnaf4.jpg"
  },
  {
    "id": "fnafu",
    "title": "FNAF Ultimate Custom Night",
    "embed": "https://clever.luluschool.world/gamefile/fnafu.html",
    "tags": [
      "Horror",
      "Survival"
    ],
    "tagline": "Every animatronic, one office, no mercy.",
    "desc": "Ultimate Custom Night — build your own roster of animatronics, crank the difficulty, and see how long you last.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/fnafu.jpg"
  },
  {
    "id": "fnafs",
    "title": "FNAF Sister Location",
    "embed": "https://clever.luluschool.world/gamefile/fnafs.html",
    "tags": [
      "Horror",
      "Survival"
    ],
    "tagline": "Underground, and nothing down there likes you.",
    "desc": "Sister Location. Go deeper into the facility, follow the instructions, and keep moving.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/fnafs.jpg"
  },
  {
    "id": "bendy",
    "title": "Bendy and the Ink Machine",
    "embed": "https://clever.luluschool.world/games/bendy/index.html",
    "tags": [
      "Horror",
      "Adventure"
    ],
    "tagline": "A cartoon studio that went very wrong.",
    "desc": "Explore an abandoned animation studio with a dark secret. Ink, corridors, and a cartoon that is very much alive.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/bendy.jpg"
  },
  {
    "id": "bloodmoney",
    "title": "Blood Money",
    "embed": "https://clever.luluschool.world/games/bloodmoney/index.html",
    "tags": [
      "Action",
      "Shooter"
    ],
    "tagline": "A short, sharp browser shooter.",
    "desc": "A compact action shooter. Clear the level, keep your health, and get out.",
    "controls": [
      "Mouse / touch — play",
      "W A S D / Arrows — move"
    ],
    "thumb": "assets/thumbs/bloodmoney.jpg"
  }
];

const CATEGORIES = [
  {
    "id": "all",
    "label": "All Games"
  },
  {
    "id": "action",
    "label": "Action"
  },
  {
    "id": "platformer",
    "label": "Platformer"
  },
  {
    "id": "multiplayer",
    "label": "Multiplayer"
  },
  {
    "id": "sandbox",
    "label": "Sandbox"
  },
  {
    "id": "horror",
    "label": "Horror"
  },
  {
    "id": "rhythm",
    "label": "Rhythm"
  },
  {
    "id": "survival",
    "label": "Survival"
  },
  {
    "id": "rpg",
    "label": "RPG"
  },
  {
    "id": "adventure",
    "label": "Adventure"
  },
  {
    "id": "fighting",
    "label": "Fighting"
  },
  {
    "id": "sports",
    "label": "Sports"
  },
  {
    "id": "party",
    "label": "Party"
  },
  {
    "id": "idle",
    "label": "Idle"
  },
  {
    "id": "casual",
    "label": "Casual"
  },
  {
    "id": "shooter",
    "label": "Shooter"
  },
  {
    "id": "open-world",
    "label": "Open World"
  },
  {
    "id": "music",
    "label": "Music"
  },
  {
    "id": "indie",
    "label": "Indie"
  }
];
