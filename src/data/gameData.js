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
    locations: ['Dragon Sanctuary', 'Town Square', 'Nearby Forest'],
    keyNPCs: ['Sanctuary Keeper', 'Town Mayor', 'Young Dragon Trainer'],
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
    locations: ['Main Tent', 'Game Alley', 'Fortune Teller\'s Wagon'],
    keyNPCs: ['Ringmaster', 'Magical Game Operator', 'Lost Child'],
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
    locations: ['Town Baker', 'Magic Ingredient Shop', 'Contest Stage'],
    keyNPCs: ['Master Baker', 'Magic Ingredient Seller', 'Cookie Judge'],
    difficulty: 'Medium'
  }
];

// NPC profiles
export const npcProfiles = [
  {
    name: 'Elderberry the Wise',
    role: 'Town Elder',
    personality: 'Kind and patient, always ready with helpful advice',
    appearance: 'Elderly halfling with twinkling eyes and a warm smile',
    location: 'Usually found in the town library or garden',
    helpfulFor: 'Giving quests, sharing local history, offering guidance'
  },
  {
    name: 'Pip Buttonbright',
    role: 'Cheerful Shopkeeper',
    personality: 'Enthusiastic and friendly, loves telling silly jokes',
    appearance: 'Young gnome with colorful clothes and a big grin',
    location: 'The Magical Odds & Ends Shop',
    helpfulFor: 'Selling supplies, sharing town gossip, providing comic relief'
  },
  {
    name: 'Luna Starwhisper',
    role: 'Animal Caretaker',
    personality: 'Gentle and caring, speaks softly to all creatures',
    appearance: 'Tall elf with silver hair and nature-themed clothing',
    location: 'The Town Stables and Animal Sanctuary',
    helpfulFor: 'Animal-related quests, providing animal companions, healing injured creatures'
  }
];

// Location descriptions
export const locations = [
  {
    name: 'Whispering Woods',
    description: 'A magical forest where the trees sometimes share secrets with travelers',
    features: [
      'Glowing mushroom circles',
      'Talking animals',
      'Ancient stone bridges',
      'Crystal-clear streams'
    ],
    possibleEvents: [
      'A lost fairy needs directions',
      'Animals are planning a forest party',
      'Magic mushrooms are spreading too quickly'
    ],
    mood: 'Mysterious but friendly'
  },
  {
    name: 'Brightstone Village',
    description: 'A cheerful town known for its magical marketplaces and friendly residents',
    features: [
      'Floating lanterns',
      'Musical fountains',
      'Rainbow cobblestone streets',
      'Flying delivery services'
    ],
    possibleEvents: [
      'Annual magic lantern festival',
      'Market day chaos',
      'Street performer competition'
    ],
    mood: 'Lively and welcoming'
  },
  {
    name: 'Crystal Caves',
    description: 'Beautiful caves filled with glowing crystals that react to emotions',
    features: [
      'Color-changing crystal walls',
      'Underground lakes',
      'Echo chambers',
      'Crystal gardens'
    ],
    possibleEvents: [
      'Crystal light show',
      'Lost mining cart',
      'Crystal singing competition'
    ],
    mood: 'Magical and peaceful'
  }
];