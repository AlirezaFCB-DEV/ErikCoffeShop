interface ButtonProps {
  children: React.ReactNode;
  className?: string
  type?: "submit" | "reset" | "button" 
}

const Button = ({ children , className , type="button"}: ButtonProps) => {
  return <button type={type} className={className}>{children}</button>;
};

export default Button;
