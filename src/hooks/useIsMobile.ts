import { useMemo } from 'react';

export function useIsMobile(): boolean {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const userAgent = window.navigator?.userAgent || '';
    return (
      /windows phone/i.test(userAgent) ||
      /android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    );
  }, []);
}
