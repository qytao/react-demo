import React, { createRef, useEffect } from 'react';
import styles from './viewerPageHandler.less';

export default function ViewerPageHandler() {
  const textRef = createRef();

  function focusTextInput(): void {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    textRef.current.focus();
  }

  useEffect(() => {
    console.log(1);
    focusTextInput();
  }, [textRef]);

  return (
    <div className={styles.viewerPageHandler}>
      <input
        id="viewerPageHandlerId"
        ref={(ref) => {
          textRef.current = ref;
        }}
      />
    </div>
  );
}
