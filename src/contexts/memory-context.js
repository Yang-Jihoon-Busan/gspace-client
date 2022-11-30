import React, { createContext, useState, useEffect, useContext } from 'react';

const MemoryContext = createContext({});

const MemoryContextProvider = ({ children }) => {
	const [ needTasksRefresh, setNeedTasksRefresh ] = useState(false);

	return (
		<MemoryContext.Provider
			value={{
				needTasksRefresh,
				setNeedTasksRefresh
			}}
		>
			{children}
		</MemoryContext.Provider>
	);
};

export {
	MemoryContext,
	MemoryContextProvider
};