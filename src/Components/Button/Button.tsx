interface ButtonProps {
  children: React.ReactNode;
  className ?: string
}

const Button = ({ children , className}: ButtonProps) => {
  return <button className={`category-btn group ${className}`}>{children}</button>;
};

export default Button;
