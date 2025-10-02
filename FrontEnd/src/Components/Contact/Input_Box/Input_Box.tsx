interface Input_Box_Props {
    children : React.ReactNode,
    label_val : string,
    input_id : string
}

const Input_Box = ({ label_val , input_id , children}: Input_Box_Props) => {
  return (
    <div className="flex flex-col gap-4">
          <label  className="cursor-pointer" htmlFor={input_id}>{label_val}</label>
          {children}
    </div>
  );
};

export default Input_Box;
