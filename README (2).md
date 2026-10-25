# Aurora Arcade

A browser arcade — **38 games**, no build step, no dependencies.

## Play locally

Open `index.html` in a browser. That's it.

## Publish on GitHub Pages

1. Create a public repo on github.com
2. Upload **everything in this folder**, keeping the structure:

```
index.html
play.html
.nojekyll
css/style.css
js/games.js
js/app.js
games/<38 wrappers>.html
assets/thumbs/<38 covers>.jpg
```

3. Settings -> Pages -> Branch: `main`, folder: `/ (root)` -> Save
4. Your site lands at `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Layout

| Path | What it is |
|---|---|
| `index.html` | Homepage: hero, featured, recent, favourites, grid, search |
| `play.html` | Player. `play.html?g=<id>` loads one game |
| `css/style.css` | All styling |
| `js/games.js` | **The catalogue — 38 games.** Edit this to add a game |
| `js/app.js` | Cards, search, filters, favourites, history, fullscreen |
| `games/*.html` | One thin wrapper per game (fallback: open a game alone) |
| `assets/thumbs/*.jpg` | Card covers, 768x432 |

## Adding a game

Add one object to `GAMES` in `js/games.js`:

```js
{
  id: "my-game",
  title: "My Game",
  embed: "https://example.com/game/index.html",
  tags: ["Action"],
  tagline: "One line for the card.",
  desc: "A paragraph for the game page.",
  controls: ["W A S D - move", "Space - jump"],
  thumb: "assets/thumbs/my-game.jpg"
}
```

Optionally add `games/my-game.html` (copy any existing wrapper) and drop a
cover into `assets/thumbs/`.

## How it behaves

- **Only one game runs at a time.** Switching games unloads the previous
  frame so it stops using CPU; hiding the tab pauses the running game.
- **Favourites and history** are stored in `localStorage` — per browser,
  never uploaded anywhere.
- **If a game won't load**, its host is refusing to be framed. Use the
  **Open at source** button on that game's page.

## Credits

Games are embedded from their own hosts and remain the property of their
respective creators:

- `brainworxedu.github.io` (14)
- `clever.luluschool.world` (23)
- `game.fnfhub.net` (1)
