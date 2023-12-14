interface ButtonProps {
  type: string;
  children: React.ReactNode;
  handleClick: () => void;
}

const Button = ({ type, handleClick, children }: ButtonProps) => {
  return (
    <div className='p-4 mb-5' style={{ backgroundColor: 'white' }}>
      <h4>Click to get a random button color</h4>
      <button type='button' className={`btn btn-${type} mt-4 mb-4 col-12 bod`} onClick={handleClick}>
        {children}
      </button>
      <h4 className='text-center'>this is a {type.toUpperCase()} color</h4>
    </div>
  );
};

export default Button;
