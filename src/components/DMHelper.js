                  <h3 className="font-bold">Story:</h3>
                  <p>{selectedStory.title}</p>
                  <p className="text-sm">{selectedStory.setup}</p>
                </div>
              )}
              {selectedLocation && (
                <div>
                  <h3 className="font-bold">Location:</h3>
                  <p>{selectedLocation.name}</p>
                  <p className="text-sm">{selectedLocation.description}</p>
                </div>
              )}
              {selectedNPCs.length > 0 && (
                <div>
                  <h3 className="font-bold">Important Characters:</h3>
                  {selectedNPCs.map((npc) => (
                    <div key={npc.name} className="ml-4">
                      <p><strong>{npc.name}</strong> - {npc.role}</p>
                      <p className="text-sm">{npc.personality}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DMHelper;