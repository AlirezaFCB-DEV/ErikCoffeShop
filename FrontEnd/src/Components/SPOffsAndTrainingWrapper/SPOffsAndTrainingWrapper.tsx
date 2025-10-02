interface SPOffsAndTrainingWrapperProps {
  children: React.ReactNode;
  className: string
}

const SPOffsAndTrainingWrapper = ({
  children,
  className
}: SPOffsAndTrainingWrapperProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default SPOffsAndTrainingWrapper;
