"use client";

import useGoogleAuth from "@/hooks/useGoogleAuth";

function GoogleButton({ children, className }) {
  const { handleGoogleAuth } = useGoogleAuth();

  const onClick = () => {
    handleGoogleAuth();
  };

  return (
    <span onClick={onClick} className={className}>
      {children}
    </span>
  );
}

export default GoogleButton;
