// src/context/ActiveSectionContext.tsx
import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { SECTION_IDS } from '../utils/constants';

// Define the shape of our context value
interface ActiveSectionContextType {
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
}

// Create the context with a default (undefined) value
const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

// Define the props for the provider
interface ActiveSectionProviderProps {
  children: ReactNode; // ReactNode allows any valid React child (elements, strings, etc.)
}

/**
 * @component ActiveSectionProvider
 * @description Provides the active section ID and a function to update it to its children.
 */
export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTION_IDS.HOME); // Default to Home

  return (
    <ActiveSectionContext.Provider value={{ activeSectionId, setActiveSectionId }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

/**
 * @function useActiveSection
 * @description Custom hook to easily consume the active section context.
 * @returns {ActiveSectionContextType} The active section ID and setter.
 * @throws {Error} If used outside of an ActiveSectionProvider.
 */
export const useActiveSection = (): ActiveSectionContextType => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};