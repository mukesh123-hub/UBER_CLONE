import React, { createContext, useContext, useState } from 'react';

// Create the context
 export const CaptainDataContext = createContext();



// Provider component
const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const updateCaptain = (captainData) =>{
        setCaptain(captainData);
    }
    const value={
        captain,
        isLoading,
        error,
        updateCaptain,
        setError,
        setIsLoading,
        setCaptain,
    };
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

// Custom hook for using the context
export default CaptainContext;