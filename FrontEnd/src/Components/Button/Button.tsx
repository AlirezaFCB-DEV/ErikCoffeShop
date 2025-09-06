interface ButtonProps {
  children: React.ReactNode;
  className?: string
  onClick? : () => void
  type?: "submit" | "reset" | "button" 
}

const Button = ({ children , className , type="button" , onClick}: ButtonProps) => {
  return <button onClick={onClick} type={type} className={className}>{children}</button>;
};

export default Button;
