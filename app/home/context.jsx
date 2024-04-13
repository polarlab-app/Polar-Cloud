'use client';

import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [dir, setDir] = useState('/common');

    return <DataContext.Provider value={{ dir, setDir }}>{children}</DataContext.Provider>;
};
