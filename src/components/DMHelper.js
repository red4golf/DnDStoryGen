import React, { useState } from 'react';
import { Book, Sword, Users, Map, MessageCircle } from 'lucide-react';
import { storyPrompts, npcProfiles, locations } from '../data/gameData';

const DMHelper = () => {
  const [currentSection, setCurrentSection] = useState('introduction');
  const [adventureName, setAdventureName] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedNPCs, setSelectedNPCs] = useState([]);

  const sections = {
    introduction: {
      title: "Welcome, Young Dungeon Master!",
      content: `Hey there! Being a Dungeon Master is like being the storyteller of an amazing adventure. 
      Your job is to guide your friends through an exciting journey where their choices matter.
      
      Remember these important things:
      • Always keep it fun and friendly
      • Listen to your players' ideas
      • It's okay to make mistakes
      • Use your imagination!`
    },
    setup: {
      title: "Setting Up Your Adventure",
      content: "First, let's give your adventure a cool name and pick a story!"
    },
    characters: {
      title: "Creating NPCs (Non-Player Characters)",
      content: "Choose some friendly characters for your players to meet!"
    },
    location: {
      title: "Your Adventure Location",
      content: "Pick an exciting place for your adventure to happen!"
    },
    story: {
      title: "Your Story Quest",
      content: "What challenge will the heroes face? Select a story and add your own ideas!"
    }
  };

  const renderSectionContent = () => {
    switch (currentSection) {
      case 'setup':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Adventure Name:</label>
              <input
                type="text"
                value={adventureName}
                onChange={(e) => setAdventureName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                placeholder="The Crystal Cave Mystery..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Choose a Story:</label>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {storyPrompts.map((story) => (
                  <div
                    key={story.title}
                    onClick={() => setSelectedStory(story)}
                    className={`p-4 rounded-lg border cursor-pointer ${
                      selectedStory?.title === story.title
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h3 className="font-bold">{story.title}</h3>
                    <p className="text-sm text-gray-600">{story.setup}</p>
                    <p className="text-xs text-gray-500 mt-2">Difficulty: {story.difficulty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'characters':
        return (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">Choose up to 3 NPCs for your adventure:</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {npcProfiles.map((npc) => (
                <div
                  key={npc.name}
                  onClick={() => {
                    if (selectedNPCs.includes(npc)) {
                      setSelectedNPCs(selectedNPCs.filter(n => n !== npc));
                    } else if (selectedNPCs.length < 3) {
                      setSelectedNPCs([...selectedNPCs, npc]);
                    }
                  }}
                  className={`p-4 rounded-lg border cursor-pointer ${
                    selectedNPCs.includes(npc)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h3 className="font-bold">{npc.name}</h3>
                  <p className="text-sm text-gray-600">{npc.role}</p>
                  <p className="text-sm text-gray-500">{npc.personality}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'location':
        return (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">Pick a magical location for your adventure:</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-4 rounded-lg border cursor-pointer ${
                    selectedLocation?.name === loc.name
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h3 className="font-bold">{loc.name}</h3>
                  <p className="text-sm text-gray-600">{loc.description}</p>
                  <p className="text-xs text-gray-500 mt-2">Mood: {loc.mood}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="whitespace-pre-wrap">{sections[currentSection].content}</div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">🎲 Young DM's Adventure Helper 🐉</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={`flex items-center space-x-2 p-2 rounded ${
                currentSection === section ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              {section === 'introduction' && <Book size={20} />}
              {section === 'setup' && <Sword size={20} />}
              {section === 'characters' && <Users size={20} />}
              {section === 'location' && <Map size={20} />}
              {section === 'story' && <MessageCircle size={20} />}
              <span className="capitalize">{section}</span>
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{sections[currentSection].title}</h2>
          {renderSectionContent()}

          {/* Adventure Summary */}
          {(selectedStory || selectedLocation || selectedNPCs.length > 0) && (
            <div className="mt-8 p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Your Adventure So Far:</h3>
              {adventureName && (
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Adventure Name:</span> {adventureName}
                </p>
              )}
              {selectedStory && (
                <div className="mb-2">
                  <p className="font-bold">Story:</p>
                  <p className="text-gray-700">{selectedStory.title}</p>
                  <p className="text-gray-600 text-sm">{selectedStory.setup}</p>
                </div>
              )}
              {selectedLocation && (
                <div className="mb-2">
                  <p className="font-bold">Location:</p>
                  <p className="text-gray-700">{selectedLocation.name}</p>
                  <p className="text-gray-600 text-sm">{selectedLocation.description}</p>
                </div>
              )}
              {selectedNPCs.length > 0 && (
                <div className="mb-2">
                  <p className="font-bold">Important Characters:</p>
                  <ul className="list-disc list-inside">
                    {selectedNPCs.map(npc => (
                      <li key={npc.name} className="text-gray-700">
                        {npc.name} - {npc.role}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DMHelper;