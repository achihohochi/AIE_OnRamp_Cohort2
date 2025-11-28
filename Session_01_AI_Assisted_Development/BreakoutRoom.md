Welcome! This guide will walk you through setting up your development environment and creating your first AI-powered frontend application. We'll complete this together during the breakout session, and you can continue on your own afterward if we don't finish.

## What You'll Be Working On?

We will build and deploy modern web applications using AI-powered development tools. You'll learn to leverage v0 (an AI tool for generating frontend code), Cursor IDE (an AI-enhanced code editor), and industry-standard deployment practices with GitHub and Vercel.

**You will master:**
- **Environment Setup:** Set up your local development environment following professional AI engineering practices
- **AI-Powered Development:** Use v0 to generate complete frontend applications from natural language prompts
- **Version Control:** Connect to remote repositories and manage your code with Git
- **Full Deployment Pipeline:** Push code to GitHub and deploy live applications to Vercel with automatic CI/CD

By the end, you'll have created, customized, and deployed your own live web application while learning modern development practices that mirror real-world team workflows.

---

## 📚 Table of Contents

- [What You'll Be Working On?](#what-you'll-be-working-on)
- [Prerequisites](#prerequisites)
- [Step 0: Set Up Your Development Environment 🛠️](#step-0-set-up-your-development-environment-️)
- [Step 1: Connect to AIM Repository Remotely 🔗](#step-1-connect-to-aim-repository-remotely-)
- [Step 2: Create Your GitHub Repository 🐙](#step-2-create-your-github-repository-)
- [Step 3: Brainstorm Your Idea 💡](#step-3-brainstorm-your-idea-)
- [Step 4: Get Your Design Resources 🎨](#step-4-get-your-design-resources-)
- [Step 5: Create Your v0 Prompt 🎬](#step-5-create-your-v0-prompt-)
- [Step 6: Clone Repository and Download v0 App in Cursor 📥](#step-6-clone-repository-and-download-v0-app-in-cursor-)
- [Step 7: Deploy to Vercel 🌐](#step-7-deploy-to-vercel-)
- [🏗️ Activity: Experiment with Your App](#️-activity-experiment-with-your-app)

---

## Prerequisites

Before we begin, make sure you have:
- [Cursor](https://cursor.sh/) installed (or Visual Studio Code)
- A [GitHub](http://github.com/) account
- A [Vercel](https://vercel.com/) account (free tier works great!)
- Node.js installed on your computer (Mac: `brew install node`, Windows: `sudo apt install nodejs npm`)
- Git installed and configured
- SSH keys set up for GitHub (see Step 0)

---

## Step 0: Set Up Your Development Environment 🛠️

Before we start building, we need to ensure your development environment is properly configured. Follow the comprehensive guide at [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-LLM-Development?tab=readme-ov-file#rocket-lets-get-started).

### Key Setup Steps:

1. **Install Required Tools:**
   - Git
   - Node.js and npm
   - Cursor (or VS Code)
   - Terminal/Command Line Interface

2. **Set Up SSH Keys for GitHub:**
   - Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
   - Copy your public key:
     - Mac: `pbcopy < ~/.ssh/id_ed25519.pub`
     - Windows (WSL): `cat ~/.ssh/id_ed25519.pub`
     - Linux: `xclip -sel c < ~/.ssh/id_ed25519.pub`
   - Add to GitHub: Settings → SSH and GPG keys → New SSH Key

3. **Configure Git:**
   ```bash
   git config --global user.email "your_email@example.com"
   git config --global user.name "Your Name"
   ```

4. **Verify Installation:**
   ```bash
   git --version
   node --version
   npm --version
   ```

**Important:** Make sure you complete the full environment setup from the guide before proceeding. This ensures you have all the tools and configurations needed for professional development.

---

## Step 1: Connect to AIM Repository Remotely 🔗

Now we'll set up a connection to the AI Maker Space repository so you can access course materials while maintaining your own repository.

### 1.1 Create Your Local Repository Directory

1. Open your terminal in Cursor
2. Navigate to where you want to store your projects:
   ```bash
   cd ~/Desktop  # or wherever you prefer
   ```
3. Create a directory for your work:
   ```bash
   mkdir my-ai-projects
   cd my-ai-projects
   ```

### 1.2 Create and Clone Your GitHub Repository

1. First, create a new repository on GitHub (we'll do this in detail in Step 2, but for now):
   - Go to [GitHub](https://github.com) and create a new repository
   - **DO NOT** initialize with README, .gitignore, or license
   - Copy the SSH URL of your repository

2. Clone your empty repository:
   ```bash
   git clone git@github.com:yourusername/yourrepo.git
   cd yourrepo
   ```

> **Note:** If you see `warning: You appear to have cloned an empty repository.` - that's perfect! You've done it correctly.

### 1.3 Add AIM Repository as Upstream Remote

1. Add the AI Maker Space repository as an upstream remote:
   ```bash
   git remote add upstream git@github.com:AI-Maker-Space/Beyond-ChatGPT.git
   ```

2. Verify your remotes:
   ```bash
   git remote -v
   ```

   You should see:
   ```
   origin    git@github.com:yourusername/yourrepo.git (fetch)
   origin    git@github.com:yourusername/yourrepo.git (push)
   upstream  git@github.com:AI-Maker-Space/Beyond-ChatGPT.git (fetch)
   upstream  git@github.com:AI-Maker-Space/Beyond-ChatGPT.git (push)
   ```

3. Fetch content from upstream:
   ```bash
   git fetch --all
   ```

4. Create a branch tracking upstream:
   ```bash
   git checkout --track -b upstream-branch upstream/main
   ```

5. Merge upstream content into your main branch:
   ```bash
   git checkout main
   git merge upstream-branch --allow-unrelated-histories
   ```

6. Push to your repository:
   ```bash
   git push origin main
   ```

**Why this setup?** This pattern allows you to:
- Keep your own repository for your work
- Pull updates from the course repository when needed
- Maintain a clean separation between course materials and your projects

---

## Step 2: Create Your GitHub Repository 🐙

Now let's create a dedicated repository for your frontend application.

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `my-v0-app` or `my-ai-frontend`)
5. Choose **Public** or **Private** (your choice)
6. **DO NOT** initialize with README, .gitignore, or license (we'll add these later)
7. Click **"Create repository"**
8. **Copy the SSH URL** (click the green "Code" button and select SSH, then copy the URL)
   - It should look like: `git@github.com:yourusername/yourrepo.git`
   - You'll need this SSH link in Step 6!

**Why start with GitHub?** Setting up version control first ensures you can track all changes from the very beginning and makes deployment seamless.

---

## Step 3: Brainstorm Your Idea 💡

First, you need an idea for your app! You have two options:

**Option A: Use v0 for brainstorming**
- Go to [v0.dev](https://v0.dev)
- Use the chat to explore ideas and get suggestions

**Option B: Use ChatGPT (Recommended)**
- Ask ChatGPT to help you brainstorm app ideas
- Get feedback on your concept
- Refine your idea until you're happy with it

**Some ideas to get you started:**
- Personal portfolio website
- Task management app
- Weather dashboard
- Recipe finder
- Habit tracker
- Quote generator
- Simple calculator with style
- Todo list with categories

---

## Step 4: Get Your Design Resources 🎨

Now it's time to gather design inspiration and components. You have two paths:

#### Path A: Use v0's Premade Templates
- Browse v0's template library
- Pick a template that matches your vision

#### Path B: Create Your Own Design (More Original!)

**a) Pick a Template Style:**
- Visit [Canva Templates](https://www.canva.com/templates/)
- Find a design style you like
- Note the colors, layout, and overall aesthetic

**b) Choose Component Styles:**
- Go to [shadcn/ui Components](https://ui.shadcn.com/docs/components/)
- Browse the component library
- Pick components that match your app's needs (buttons, cards, forms, etc.)

**c) Select a Color Scheme:**
- Visit [Coolors](https://coolors.co/)
- Generate or browse color palettes
- Pick colors that match your app's mood and purpose

---

## Step 5: Create Your v0 Prompt 🎬

Now combine everything into a detailed prompt for v0:

1. Describe your app idea
2. Reference the template style you chose
3. Mention the shadcn/ui components you want to use
4. Include your color scheme
5. Add any specific features or requirements

**Example prompt structure:**
```
Create me an app: [Your App Name]

[Description of your app concept]

Use the design style similar to: [Canva template reference]
For components, use shadcn/ui with: [component names]
Color scheme: [your colors from Coolors]
```

**Example: "Hot Mess Tracker" App**

```
Create me an app: "Hot Mess Tracker"

A "self-report" app for chaos level of your day.

Concept:
- Sliders: "Late to class," "Lost charger," "Sent risky text," "Procrastination"
- Animated emoji face reacts as your "hot mess score" increases
- Saves your results and gives sarcastic motivational message

Design Requirements:
- Use the website style similar to: https://www.canva.com/templates/EAFSoi3Ltnc/
- For buttons, use shadcn/ui with outline variant
- Color scheme: murrey (#89023e), old-rose (#cc7178), misty-rose (#ffd9da)
```

---
## Step 6: Clone Repository and Download v0 App in Cursor 📥

### 6.1 Clone Your GitHub Repository in Cursor

1. Open Cursor IDE
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the Command Palette
3. Type **"Git: Clone"** and select it
4. Paste your SSH repository URL (from Step 2)
5. Choose a location to clone the repository
6. Cursor will open a **new window** with your cloned repository

**You now have your GitHub repository open in Cursor!**

### 6.2 Download Your App from v0

1. In v0, after generating your app, click **"Download"**
2. Copy the **npx command** (it should look like: `npx create-v0-app@latest`)
3. In Cursor's terminal (in the cloned repository window), run the npx command from v0:
   ```bash
   npx create-v0-app@latest
   ```
   *(Paste the exact command from v0)*

4. Follow the prompts if any appear
5. This will create your app folder with all the code in your repository
### 6.3 Install Dependencies

1. In Cursor's terminal, navigate to your app directory:
   ```bash
   cd app  # or the folder name v0 created
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   **If you encounter errors:**
   ```bash
   npm install --legacy-peer-deps
   ```

### 6.4 Run Your App Locally

1. In Cursor's terminal, navigate to your app directory:
   ```bash
   cd app  # or the folder name v0 created
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Look for a local URL (usually `http://localhost:3000`) in the terminal

4. Open the URL in your browser

5. Verify your app is working correctly!

**If port 3000 is in use:**
```bash
kill -9 $(lsof -ti tcp:3000)
```

### 6.5 Generate README with Cursor 🤖

Let Cursor help you create documentation:

1. In Cursor, ask: *"Create a README.md file explaining how to launch this app"*
2. Cursor will analyze your project structure
3. It will generate a README with setup and launch instructions
4. Review and customize as needed

### 6.6 Commit and Push to GitHub

Since you cloned the repository, it's already connected to GitHub! Now commit your v0 app:

1. In Cursor's terminal, make sure you're in the repository root (not the app folder)
2. Add all files:
   ```bash
   git add .
   ```

3. Create your first commit:
   ```bash
   git commit -m "Initial commit: v0 generated frontend"
   ```

4. Push your code:
   ```bash
   git push -u origin main
   ```

5. Go to your GitHub repository and verify all files are there! 🎉

---

## Step 7: Deploy to Vercel 🌐

Now let's get your app live on the web!

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Import your GitHub repository (the one you just pushed to)
5. Vercel will automatically detect your framework
6. Click **"Deploy"**
7. Wait a few minutes for the deployment to complete
8. Once deployed, click on your project to see the live URL

**Your app is now live and accessible to the world!** 🎉

**What just happened?**
- Vercel automatically detected your Next.js/React framework
- It built your app in the cloud
- It deployed it to a global CDN
- Every time you push to `main`, Vercel will automatically redeploy!

---

## 🏗️ Activity: Experiment with Your App

Now it's your turn to experiment and get creative! Use this time to practice what you've learned and explore the tools.

**Experiment with Design Customization:**
- Test out different background styles and color schemes
- Try different button styles and components from shadcn/ui
- Make design changes using v0 to see how it generates updated code
- Practice iterating on your app's visual design

**Try Making Changes:**
- Use Cursor's AI to add a new feature
- Ask Cursor to improve the styling
- Add a new component or section
- Experiment with different layouts

**Remember:**
- Test locally with `npm run dev` before pushing changes
- Commit your changes: `git add .` then `git commit -m "your message"`
- Push to GitHub: `git push origin main`
- Watch Vercel automatically redeploy your changes!

---

## 🛠️ Troubleshooting

### npm install errors

If you encounter an `npm install` error:

1. Install with legacy peer deps:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Uninstall `vaul` (problematic peer dependency in some templates):
   ```bash
   npm uninstall vaul
   ```

3. Commit the resulting dependency updates:
   ```bash
   git add package.json package-lock.json
   git commit -m "fix: resolve dependency conflicts"
   git push
   ```

4. Redeploy on Vercel. The build should now pass.

### Port 3000 in use

If port 3000 is in use:
```bash
kill -9 $(lsof -ti tcp:3000)
```

### Git push errors

If you get authentication errors:
- Make sure your SSH key is added to GitHub
- Verify your remote URL: `git remote -v`
- Try using HTTPS instead: `git remote set-url origin https://github.com/username/repo.git`

### Vercel deployment fails

- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify your `package.json` has a `build` script
- Check that your framework is supported by Vercel

---

## 🎓 Tips for Success

- **Take your time** with each step - don't rush!
- **Test locally** before pushing to GitHub
- **Save your work** frequently (git commits!)
- **Experiment** with different designs and components
- **Ask questions** if you get stuck
- **Have fun** - this is your chance to be creative!

---

## 📚 Next Steps

Once you've completed this breakout session, you can:
- Continue customizing your app with Cursor
- Add more features and components
- Learn about GitFlow and feature branches (see the full Assignment)
- Explore backend integration with LLM APIs
- Share your deployed app with others!

**Congratulations on deploying your first AI-generated application!** 🎉

---
