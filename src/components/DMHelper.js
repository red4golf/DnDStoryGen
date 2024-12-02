                    <Button
                      key={sides}
                      variant="outline"
                      onClick={() => rollDice(sides)}
                      className="w-16 h-16 flex flex-col items-center justify-center"
                    >
                      <span>d{sides}</span>
                      {diceResult && sides === parseInt(diceResult.sides) && (
                        <span className="text-sm">{diceResult.value}</span>
                      )}
                    </Button>
                  ))}
                </div>
                {diceResult && (
                  <p className="mt-4 text-center font-bold">
                    You rolled a {diceResult}!
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {/* Print-only Adventure Summary */}
          <div className="hidden print:block mt-8">
            <h2 className="text-2xl font-bold mb-4">Adventure Summary</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Adventure Name:</h3>
                <p>{adventureName}</p>
              </div>
              {selectedStory && (
                <div>
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