# Lingapnor Nikitha - Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript. No build step, frameworks or package installs are needed.

## Run locally

**Option 1: open the file directly**
1. Open the `portfolio` folder.
2. Double-click `index.html` (it opens in your default browser).

**Option 2: VS Code with Live Server (recommended while editing)**
1. Open the `portfolio` folder in VS Code (`File > Open Folder...`).
2. Install the **Live Server** extension (by Ritwick Dey) if you don't have it.
3. Right-click `index.html` and choose **Open with Live Server**. The site opens at `http://127.0.0.1:5500` and reloads when you save.

**Option 3: Python (no extension needed)**
```bash
cd portfolio
python -m http.server 8000
```
Then visit `http://localhost:8000`.

> The Poppins font loads from Google Fonts, so it needs an internet connection. Offline, the site falls back to your system font and still works.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | All page content and sections |
| `style.css` | Theme, layout and responsive rules |
| `script.js` | Mobile menu, active nav link, scroll reveal |
| `profile.jpg` | Profile photo |
| `CV.pdf` | Resume. The "Download Resume" button points here, so keep this filename |

## Updating content

- **Resume:** replace `CV.pdf` with a new PDF of the same name.
- **Projects, skills, certifications:** edit the matching section in `index.html`.
- **Colours:** change the variables at the top of `style.css` (`--bg`, `--accent`, etc.).
