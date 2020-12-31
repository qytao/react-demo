import React, { FC, ReactChild, MouseEvent } from 'react';
import styles from './viewer.less';

interface ViewerProps {
  value?: number;
  onChange?: (num: number) => void;
  children?: ReactChild;
}

const Viewer: FC<ViewerProps> = ({
  value = 0,
  onChange = () => {},
  children,
}) => {
  function handleSubmit(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    const element: HTMLElement | null = document.getElementById(
      'viewerPageHandlerId',
    );
    console.log(element?.value);
  }

  function handleAdd(): void {
    onChange(value + 1);
  }

  function handleMinus(): void {
    onChange(value - 1);
  }

  return (
    <div className={styles.viewer}>
      <button onClick={handleAdd}>+</button>
      <span> viewer {value} </span>
      <button onClick={handleMinus}>-</button>
      <div>{children}</div>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};

export default Viewer;
