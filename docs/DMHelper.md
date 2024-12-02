# Young DM's Adventure Helper Documentation

## Table of Contents
1. [Overview](#overview)
2. [Component Structure](#component-structure)
3. [Setup Instructions](#setup-instructions)
4. [Features](#features)
5. [Props and State](#props-and-state)
6. [Usage Examples](#usage-examples)
7. [Accessibility](#accessibility)
8. [Performance Considerations](#performance-considerations)
9. [Troubleshooting](#troubleshooting)

## Overview

The Young DM's Adventure Helper is a React component designed to help young Dungeon Masters create and organize their D&D adventures. The component provides an intuitive, step-by-step interface for building adventures while maintaining age-appropriate content and user-friendly interactions.

### Key Features
- Interactive adventure building process
- Kid-friendly interface
- Built-in dice roller
- Print functionality
- Mobile-responsive design

## Component Structure

### Core Components
```jsx
DMHelper/
├── StoryCard (memo)
├── NPCCard (memo)
├── LocationCard (memo)
└── DMHelper (main component)
```

### Section Organization
- Introduction
- Setup
- Characters
- Location
- Story

## Setup Instructions

### Prerequisites
```bash
# Required dependencies
npm install react lucide-react @radix-ui/react-alert

# Required UI components from shadcn/ui
npx shadcn-ui@latest add card
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
```

### Installation
1. Copy the `DMHelper.js` component to your project's components directory
2. Ensure your `gameData.js` is properly configured with:
   - Story prompts
   - NPC profiles
   - Location descriptions

### Basic Usage
```jsx
import { DMHelper } from './components/DMHelper';

function App() {
  return (
    <div>
      <DMHelper />
    </div>
  );
}
```

## Features

### 1. Section Navigation
- Icon-based navigation menu
- Progressive flow between sections
- Mobile-responsive design
- Clear section indicators

### 2. Adventure Creation
```jsx
// Example of adventure data structure
{
  adventureName: string,
  selectedStory: StoryObject,
  selectedLocation: LocationObject,
  selectedNPCs: NPCObject[]
}
```

### 3. Dice Roller
- Supports standard D&D dice (d4, d6, d8, d10, d12, d20)
- Visual feedback for rolls
- Easy-to-read results

### 4. Print Functionality
- Formatted adventure summary
- Print-specific styles
- Organized content layout

## Props and State

### State Management
```jsx
const [currentSection, setCurrentSection] = useState('introduction');
const [adventureName, setAdventureName] = useState('');
const [selectedStory, setSelectedStory] = useState(null);
const [selectedLocation, setSelectedLocation] = useState(null);
const [selectedNPCs, setSelectedNPCs] = useState([]);
const [showDiceRoller, setShowDiceRoller] = useState(false);
const [diceResult, setDiceResult] = useState(null);
```

### Data Structures

#### Story Object
```jsx
{
  title: string,
  setup: string,
  possibleTwists: string[],
  locations: string[],
  keyNPCs: string[],
  difficulty: string
}
```

#### NPC Object
```jsx
{
  name: string,
  role: string,
  personality: string,
  appearance: string,
  location: string,
  helpfulFor: string
}
```

#### Location Object
```jsx
{
  name: string,
  description: string,
  features: string[],
  possibleEvents: string[],
  mood: string
}
```

## Usage Examples

### Basic Implementation
```jsx
import { DMHelper } from './components/DMHelper';

function CampaignBuilder() {
  return (
    <div className="container">
      <h1>Create Your Adventure</h1>
      <DMHelper />
    </div>
  );
}
```

### Custom Styling
```jsx
// Example of applying custom styles
<div className="my-custom-container">
  <DMHelper className="custom-helper" />
</div>
```

## Accessibility

### ARIA Labels
- Navigation buttons include descriptive labels
- Interactive elements have proper roles
- Form inputs are properly labeled

### Keyboard Navigation
- Tab navigation supported
- Enter/Space for selections
- Escape to close modals

### Color Contrast
- Meets WCAG 2.1 guidelines
- Clear visual feedback
- High contrast text

## Performance Considerations

### Memoization
- Card components use React.memo
- Prevents unnecessary re-renders
- Optimized for performance

### State Updates
- Batched state updates
- Efficient event handling
- Optimized re-rendering

### Best Practices
- Conditional rendering
- Proper key usage
- Optimized loops

## Troubleshooting

### Common Issues

1. Missing Dependencies
```bash
# Install required dependencies
npm install lucide-react @radix-ui/react-alert
```

2. Styling Issues
```bash
# Ensure Tailwind CSS is properly configured
npm install -D tailwindcss
npx tailwindcss init
```

3. Component Integration
```jsx
// Verify import paths
import { DMHelper } from './correct/path/to/DMHelper';
```

### Support

For issues and support:
1. Check proper installation of all dependencies
2. Verify Tailwind CSS configuration
3. Ensure all required shadcn/ui components are installed
4. Check console for any error messages

## Contributing

To contribute to the Young DM's Adventure Helper:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with detailed description
4. Ensure all tests pass
5. Follow the established code style guidelines