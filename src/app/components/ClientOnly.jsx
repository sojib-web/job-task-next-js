"use client";

import { useState, useEffect } from "react";

/**
 * Ensures children only render on client-side to prevent hydration mismatch
 */
export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
}
