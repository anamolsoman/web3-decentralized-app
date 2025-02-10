import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define types for the context value
interface CurrentAccountContextType {
  currentAccount: string;
  setCurrentAccount: Dispatch<SetStateAction<string>>; // Updated type
}

// Create the context with the defined types
export const CurrentAccountContext = createContext<
  CurrentAccountContextType | undefined
>(undefined);

// Define the provider component
export const CurrentAccountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentAccount, setCurrentAccount] = useState<string>("");

  return (
    <CurrentAccountContext.Provider
      value={{ currentAccount, setCurrentAccount }}
    >
      {children}
    </CurrentAccountContext.Provider>
  );
};
