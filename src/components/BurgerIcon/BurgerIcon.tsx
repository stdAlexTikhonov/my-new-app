import styles from './BurgerIcon.module.scss';

interface BurgerIconProps {
  isOpen: boolean;
  onClick?: () => void;
  className?: string;
}

export const BurgerIcon = ({ isOpen, onClick, className = '' }: BurgerIconProps) => {
  return (
    <button 
      className={`${styles.burger} ${isOpen ? styles.active : ''} ${className}`}
      onClick={onClick}
      aria-label="Меню"
      aria-expanded={isOpen}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
};