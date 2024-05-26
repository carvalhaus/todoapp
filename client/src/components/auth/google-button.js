"use client";

function GoogleButton({ children, className }) {
  const onClick = () => {
    console.log("LOGIN BUTTON CLICKED");
  };

  return (
    <span onClick={onClick} className={className}>
      {children}
    </span>
  );
}

export default GoogleButton;
