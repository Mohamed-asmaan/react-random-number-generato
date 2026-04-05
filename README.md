# Random Number Generator

A small React app that draws a random integer in a fixed range. It is built to practice **state** (`useState`), **events** (button clicks), and **conditional rendering** (placeholder vs. result).

**Remote:** [github.com/Mohamed-asmaan/react-random-number-generato](https://github.com/Mohamed-asmaan/react-random-number-generato)

---

## What it does

- Shows **“No number generated yet”** until the first click.
- Each click on **Generate random number** picks a new integer from **1 through 100** (inclusive).
- The UI updates immediately because the value lives in React state.

---

## Quick start

Requirements: [Node.js](https://nodejs.org/) (LTS recommended).

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

| Command        | Purpose                    |
|----------------|----------------------------|
| `npm run dev`  | Dev server with hot reload |
| `npm run build`| Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint                 |

---

## Project structure

```
src/
  App.jsx                      # Root layout shell
  App.css                      # Page shell (safe-area padding, centering)
  main.jsx                     # React root mount
  index.css                    # Global theme (colors, fonts, #root)
  components/
    RandomNumberGenerator.jsx  # State, random logic, UI
    RandomNumberGenerator.css  # Component layout and styles
```

---

## How the logic works

1. **State:** `number` is `null` before the first generation, then a JavaScript number. Using `null` (not `0`) keeps the “empty” state unambiguous—zero could be a valid random value in other ranges.

2. **Random integer in \([min, max]\):**

   \[
   \text{Math.floor}(\text{Math.random}() \times (max - min + 1)) + min
   \]

   `Math.random()` is in \([0, 1)\). Multiplying by `(max - min + 1)` and flooring gives an integer in \([0, max-min]\); adding `min` shifts to \([min, max]\).

3. **Conditional UI:** If `number === null`, render the placeholder copy; otherwise render the value. `aria-live="polite"` on the result region helps screen readers announce updates.

4. **Animation on change:** The `<span key={number}>` remounts when the value changes so the CSS animation can run again without extra `useEffect` logic.

---

## Changing the range

Edit the constants at the top of `src/components/RandomNumberGenerator.jsx`:

```js
const MIN = 1
const MAX = 100
```

The headline/meta text uses these values, so the copy stays in sync.

---

## Design choices (why it looks like this)

- **Typography:** Newsreader + DM Sans + IBM Plex Mono (loaded in `index.html`) for a clear hierarchy without a generic “default UI” look.
- **Theme:** Warm neutrals and a single accent color; variables live in `src/index.css` with a `prefers-color-scheme: dark` block.
- **Mobile:** `viewport-fit=cover`, safe-area padding on `.app`, `touch-action: manipulation` on the button, and a minimum tap-friendly button height.
- **Accessibility:** Associated heading `id` for the section, focus styles on the button, and polite live region for the changing number.

---

## Assignment checklist (typical rubric)

| Requirement | Where it’s met |
|-------------|----------------|
| Functional component | `RandomNumberGenerator.jsx` |
| `useState` for the value | `const [number, setNumber] = useState(null)` |
| Button triggers new number | `onClick={handleGenerate}` |
| Range 1–100 | `MIN` / `MAX` + `randomInRange` |
| Show number after generate | Conditional render in `.rng__display` |
| “No number generated yet” first | When `number === null` |
| Styling | `RandomNumberGenerator.css`, `index.css`, `App.css` |

---

## Tech stack

- [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)

---

## License

Private coursework / personal practice—add a license file if you open-source the repo.
