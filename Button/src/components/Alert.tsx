interface AlertProps {
  color: string;
  onClose: () => void;
}

const Alert = ({ color, onClose }: AlertProps) => {
  return (
    <div className={`col-12 alert alert-${color} alert-dismissible`}>
      <p>This an alert with color: {color}</p>
      <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close' onClick={onClose}></button>
    </div>
  );
};

export default Alert;
