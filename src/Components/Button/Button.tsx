interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="category-btn group">{children}</button>;
};

export default Button;
