import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    
    try {
      // Modern way (addEventListener/removeEventListener)
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } catch {
      // Fallback for older browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
}