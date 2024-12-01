import React, { useState } from 'react';
import { Book, Sword, Users, Map, MessageCircle } from 'lucide-react';

const DMHelper = () => {
  const [currentSection, setCurrentSection] = useState('introduction');
  const [adventureName, setAdventureName] = useState('');
  
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
      content: "First, let's give your adventure a cool name!"
    },
    characters: {
      title: "Creating NPCs (Non-Player Characters)",
      content: "These are the friendly helpers, mysterious strangers, and silly shopkeepers your players will meet!"
    },
    location: {
      title: "Your Adventure Location",
      content: "Where will your story take place? A spooky forest? A busy town? An ancient temple?"
    },
    story: {
      title: "Your Story Quest",
      content: "What problem do the heroes need to solve? Remember to keep it fun and age-appropriate!"
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">🎲 Young DM's Adventure Helper 🐉</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setCurrentSection('introduction')}
            className={`flex items-center space-x-2 p-2 rounded ${
              currentSection === 'introduction' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            <Book size={20} />
            <span>Intro</span>
          </button>
          <button
            onClick={() => setCurrentSection('setup')}
            className={`flex items-center space-x-2 p-2 rounded ${
              currentSection === 'setup' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            <Sword size={20} />
            <span>Setup</span>
          </button>
          <button
            onClick={() => setCurrentSection('characters')}
            className={`flex items-center space-x-2 p-2 rounded ${
              currentSection === 'characters' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            <Users size={20} />
            <span>Characters</span>
          </button>
          <button
            onClick={() => setCurrentSection('location')}
            className={`flex items-center space-x-2 p-2 rounded ${
              currentSection === 'location' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            <Map size={20} />
            <span>Location</span>
          </button>
          <button
            onClick={() => setCurrentSection('story')}
            className={`flex items-center space-x-2 p-2 rounded ${
              currentSection === 'story' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            <MessageCircle size={20} />
            <span>Story</span>
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{sections[currentSection].title}</h2>
          <div className="whitespace-pre-wrap">{sections[currentSection].content}</div>
          
          {currentSection === 'setup' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Adventure Name:</label>
              <input
                type="text"
                value={adventureName}
                onChange={(e) => setAdventureName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                placeholder="The Crystal Cave Mystery..."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DMHelper;