import React, { useState } from 'react';
import ViewerPageHandler from '../components/viewerPageHandler';
import Viewer from '../components/viewer';
import Tab from '../components/tab';
import styles from './index.less';

export default () => {
  const [count, setCount] = useState(0);

  function handleTabChanged(key: string) {
    console.log(`${key} cliked`);
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.left}>
        <Tab onChange={handleTabChanged} />
      </div>
      <div className={styles.right}>
        <Viewer value={count} onChange={setCount}>
          <ViewerPageHandler />
        </Viewer>
      </div>
    </div>
  );
};
