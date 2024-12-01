// Story prompts suitable for young players
export const storyPrompts = [
  {
    title: 'The Missing Pet Dragon',
    setup: 'A friendly baby dragon has gone missing from the local dragon sanctuary. The townspeople need help finding it before it gets into trouble!',
    possibleTwists: [
      'The dragon is playing hide and seek',
      'It's trying to help someone in need',
      'It found a treasure and wants to share it'
    ],
    difficulty: 'Easy'
  },
  {
    title: 'The Magical Carnival',
    setup: 'A mysterious traveling carnival has appeared in town overnight. The carnival games are powered by real magic!',
    possibleTwists: [
      'Some of the magic is going wild',
      'A prize has gone missing',
      'Someone needs help with their magical performance'
    ],
    difficulty: 'Easy'
  },
  {
    title: 'The Enchanted Cookie Contest',
    setup: 'The annual cookie baking contest is happening, but someone has enchanted all the ingredients to create silly effects!',
    possibleTwists: [
      'Cookies make people float',
      'Cookies make people speak in rhymes',
      'Cookies give people temporary magical powers'
    ],
    difficulty: 'Medium'
  }
];

// Kid-friendly monsters with simple stats
export const monsterGuide = [
  {
    name: 'Friendly Forest Troll',
    description: 'A large, green troll who protects the forest. Despite looking scary, they're actually very nice!',
    stats: {
      hitPoints: 30,
      armorClass: 15,
      friendly: true,
      specialAbility: 'Can talk to plants and animals'
    },
    possibleActions: ['Help guide lost travelers', 'Share forest wisdom', 'Offer magical berries']
  },
  {
    name: 'Mischievous Pixie',
    description: 'A tiny, flying creature that loves to play harmless pranks.',
    stats: {
      hitPoints: 10,
      armorClass: 13,
      friendly: true,
      specialAbility: 'Can turn invisible for short periods'
    },
    possibleActions: ['Create sparkles', 'Tell riddles', 'Lead players on a fun chase']
  },
  {
    name: 'Cookie Golem',
    description: 'A creature made entirely of magical cookies! Smells delicious.',
    stats: {
      hitPoints: 20,
      armorClass: 12,
      friendly: true,
      specialAbility: 'Can create endless cookies'
    },
    possibleActions: ['Share treats', 'Tell cookie-related jokes', 'Help with baking challenges']
  }
];

// Simple rules reference
export const quickRules = [
  {
    situation: 'When a player wants to do something tricky',
    rule: 'Ask them to roll a d20 (20-sided die) and add their skill bonus. Higher numbers mean better success!',
    example: 'Climbing a tree: Roll d20 + Athletics'
  },
  {
    situation: 'When players meet a new character',
    rule: 'Describe what they look like and how they're acting. Use a funny voice if you want!',
    example: 'The shopkeeper has a curly mustache and talks very fast'
  },
  {
    situation: 'When players want to help each other',
    rule: 'Let them work together! This makes the game more fun and teaches teamwork.',
    example: 'One player distracts the guard while another sneaks past'
  },
  {
    situation: 'When you're not sure what should happen',
    rule: 'Make something up that sounds fun and fair. You're the DM - you can decide!',
    example: 'The magical door opens if the players tell it a funny joke'
  }
];

// DM Script templates
export const dmScripts = {
  gameStart: [
    'Welcome to our adventure, brave heroes!',
    'Before we begin, does everyone have their character sheets?',
    'Let me set the scene for you...',
    'You find yourselves...'
  ],
  combat: [
    'Roll for initiative! That means everyone rolls a d20 to see who goes first.',
    'When it's your turn, you can move and take one action.',
    'What would you like to do?'
  ],
  exploration: [
    'You enter [location]. What would you like to do here?',
    'What does your character look for?',
    'Would anyone like to make a check to search the area?'
  ],
  npcMeeting: [
    'You meet [character name]. They look like...',
    'They say to you...',
    'How do you want to respond?'
  ],
  rewards: [
    'For completing this challenge, you find...',
    'The grateful villager gives you...',
    'In the treasure chest, you discover...'
  ]
};