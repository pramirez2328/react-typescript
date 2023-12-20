import styles from './Button.module.css';
interface ButtonProps {
  color: string;
  handleChange: () => void;
}

function Button({ color, handleChange }: ButtonProps) {
  return (
    <button onClick={handleChange} className={[styles.btn, styles[`btn-${color}`]].join(' ')}>
      Click me
    </button>
  );
}

export default Button;
