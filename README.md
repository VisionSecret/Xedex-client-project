# Project Setup and Deployment Guide

## Installing Node Modules
To set up your project and install necessary dependencies, follow these steps:

1. **Ensure Node.js is Installed:**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```sh
     node -v
     npm -v
     ```

2. **Navigate to Your Project Folder:**
   ```sh
   cd your-project-folder
   ```

3. **Install Dependencies:**
   ```sh
   npm install
   ```
   or if using Yarn:
   ```sh
   yarn install
   ```

---

## Deploying to Netlify

### Method 1: Using Netlify CLI

1. **Install Netlify CLI:**
   ```sh
   npm install -g netlify-cli
   ```
2. **Login to Netlify:**
   ```sh
   netlify login
   ```
3. **Deploy Your Project:**
   ```sh
   netlify deploy
   ```
   Use the `--prod` flag to deploy to production:
   ```sh
   netlify deploy --prod
   ```

### Method 2: Using Netlify Web Interface

1. Go to [Netlify](https://app.netlify.com/)
2. Click on **New site from Git**
3. Connect your GitHub repository
4. Configure build settings (example for React/Vite projects):
   - Build Command: `npm run build` or `yarn build`
   - Publish Directory: `dist`
5. Click **Deploy**

---

## Deploying to Vercel

### Method 1: Using Vercel CLI

1. **Install Vercel CLI:**
   ```sh
   npm install -g vercel
   ```
2. **Login to Vercel:**
   ```sh
   vercel login
   ```
3. **Deploy Your Project:**
   ```sh
   vercel
   ```
   To deploy to production:
   ```sh
   vercel --prod
   ```

### Method 2: Using Vercel Web Interface

1. Go to [Vercel](https://vercel.com/)
2. Click **New Project**
3. Connect your GitHub repository
4. Configure build settings (example for React/Vite projects):
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `dist`
5. Click **Deploy**

---

## Notes
- Ensure your `.gitignore` includes `node_modules`
- If using environment variables, configure them in Netlify or Vercel settings
- For Next.js projects, no need to specify an output directory; both platforms auto-detect Next.js

Happy coding! 🚀

