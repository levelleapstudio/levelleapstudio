# Level Leap Studio Website

This is the official website for Level Leap Studio game development company.

## Website Structure

- **Homepage** - Introduction to Level Leap Studio with featured games
- **Games Page** - Complete list of all games with Play Store links
- **Privacy Policy** - Privacy policy for all Level Leap Studio games

## How to Update Games

To add new games or update existing ones:

1. Open the `games-data.js` file
2. Add a new game object to the `gamesData` array with:
   - `id`: Unique number
   - `title`: Your game name
   - `description`: Short description
   - `image`: URL to game image (you can use your own images)
   - `playStoreLink`: Your Play Store URL
   - `featured`: Set to `true` to show on homepage

Example:
```javascript
{
    id: 4,
    title: "My New Game",
    description: "Description of your new game",
    image: "path/to/your/image.jpg",
    playStoreLink: "https://play.google.com/store/apps/details?id=your.game.id",
    featured: true
}
```

## GitHub Pages Hosting Instructions

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it `levelleapstudio` (or any name you prefer)
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Your Files
1. Open Git Bash or Terminal in your website folder
2. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit - Level Leap Studio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/levelleapstudio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Website
Your website will be available at:
`https://YOUR_USERNAME.github.io/levelleapstudio/`

It may take a few minutes to become active.

## Custom Domain (Optional)
If you have your own domain:
1. Create a file named `CNAME` in your repository
2. Add your domain name (e.g., `levelleapstudio.com`)
3. Configure your domain DNS to point to GitHub Pages

## Current Games
- Ball Drop Mania 3D - [Play Store Link](https://play.google.com/store/apps/details?id=com.levelleap.balldropmania3d)

## Important Notes
- Add your Ball Drop Mania 3D screenshot to the `images` folder as `ball-drop-mania-3d.jpg`
- The privacy policy has been updated with your contact email
- The website is fully responsive and works on all devices
- To add more games in the future, simply update `games-data.js`