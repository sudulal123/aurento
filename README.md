<div align="center">
  <br />
    <a>
      <img src="https://github.com/sudulal123/aurento/assets/86375908/e73591a5-8349-4a31-b518-fdf6a402f57e" alt="Project Banner">
    </a>
  <br />
  
  <h3 align="center">Aurento - Car leasing site</h3>

</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stacks](#tech-stacks)
3. [Quick Start](#quick-start)
4. [Features](#features)
5. [To-do](#to-do)

## <a name="introduction"> Introduction </a>

A modern car rental website offering a sleek and responsive user interface.

The integration of Next.js ensures optimal performance and Tailwind CSS allows for easy and efficient styling.

## <a name="tech-stacks"> Tech Stack </a>

- Next.js
- TypeScript
- Tailwind CSS

## <a name="quick-start"> Quick Start </a>

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

```bash
# Clone the Repository
git clone https://github.com/sudulal123/aurento.git

# Installation
npm install

# Run the project locally at http://localhost:3000 in your browser
npm run dev

# Build the project
npm run build
```
<br/>

**env Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_RAPID_API_KEY=
NEXT_PUBLIC_IMAGIN_API_KEY=
```
Sign up to [Rapid API](https://rapidapi.com/hub) & [Imagin Cars](https://www.imagin.studio/solutions/api) for APIs and replace the placeholder values with your credentials in above mentioned `.env` file.


## <a name="features"> Features </a>

**Dynamic listing**: It offers a dynamic car listing page with details.

**Search functionality**: Allow users to search for a specific car and model in the search field.

**Drop-down selection**: Allow users to select a car with a specific built year or with specific fuel options.

## <a name="to-do"> To-do </a>
- [ ] To Fix: page reload after selection of option
- [ ] To Fix: Alternative API Imagin API for car images  
- [ ] To implement: Sign-in button with pop-up login dialogue
