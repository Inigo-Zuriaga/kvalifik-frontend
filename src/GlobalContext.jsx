import { createContext, useState, useContext } from "react";

const Context = createContext();

export default function GlobalContext({ children }) {
  const [ensembles, setEnsembles] = useState([]);

  const initialValues = {
    ensembles,
    setEnsembles,
  };

  return <Context.Provider value={initialValues}>{children}</Context.Provider>;
}

export const useGlobalContext = () => useContext(Context);
