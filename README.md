# React Component Library Assignment

## Overview
This project is a scalable React component library built with TypeScript, TailwindCSS, and Storybook. It demonstrates modern UI component development, documentation, and testing practices.

### Components
- **InputField**: Flexible input component with validation, variants, sizes, helper/error text, clear button, password toggle, and accessibility features.
- **DataTable**: Data table with sorting, row selection, loading/empty states, and accessibility.

## Folder Structure
```
react_componeents/
  src/
    components/
      InputField/
      DataTable/
    stories/
    examples/
    tests/
  .storybook/
  package.json
  README.md
```

## Setup Instructions
1. **Install dependencies**
   ```powershell
   npm install
   ```
2. **Run Storybook for interactive component docs**
   ```powershell
   npm run storybook
   ```
3. **Build Storybook for deployment**
   ```powershell
   npm run build-storybook
   ```
   Deploy the `storybook-static` folder to Vercel, Netlify, or Chromatic.


## Approach & Decisions
- **Scalable Structure**: Components, stories, examples, and tests are organized for easy maintenance and growth.
- **TypeScript**: Ensures type safety and better developer experience.
- **TailwindCSS**: Enables rapid, modern, and responsive styling.
- **Storybook**: Used for interactive documentation and visual testing.
- **Accessibility**: ARIA labels and states for better usability.
- **Demo & Examples**: Example files show real-world usage of each component.

## Screenshots / GIFs


---

Feel free to reach out for any questions or improvements!
