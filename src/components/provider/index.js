import React from "react";
import RootStore from "../../stores/rootStore";
import { useLocalStore } from "mobx-react-lite";

console.log(useLocalStore, "21");
const mobxContext = React.createContext(null);

export const MobxProvider = ({ children }) => {
  const store = useLocalStore(() => new RootStore());
  console.log;
  return <mobxContext.Provider value={store}>{children}</mobxContext.Provider>;
};

export const useStore = () => {
  const store = React.useContext(mobxContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a MobxProvider.");
  }
  return store;
};
