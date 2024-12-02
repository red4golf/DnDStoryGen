import React, { useState, memo } from 'react';
import { Book, Sword, Users, Map, MessageCircle, ChevronRight, Save, Printer, Dice } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storyPrompts, npcProfiles, locations } from '../data/gameData';