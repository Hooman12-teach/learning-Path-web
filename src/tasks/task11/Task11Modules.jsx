import styles from './Task11Modules.module.css';

const Task11Modules = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>CSS Modules Styling</h2>
        <p>This component uses CSS Modules which scope styles to prevent naming conflicts and are bundled locally.</p>
        <button className={styles.btn}>Click Me</button>
      </div>
    </div>
  );
};

export default Task11Modules;
