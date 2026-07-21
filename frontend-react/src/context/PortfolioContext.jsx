import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchPortfolioData, readPortfolioCache } from "../lib/sanity";

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(() => readPortfolioCache());
  const [loading, setLoading] = useState(!readPortfolioCache());
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const data = await fetchPortfolioData();
        if (!cancelled) {
          setPortfolio(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled && !portfolio) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return ctx;
}
