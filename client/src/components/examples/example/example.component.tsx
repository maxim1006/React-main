import React, { memo, ReactNode } from 'react';
import styles from './example.module.less';

type ExampleComponentProps = {
    component: ReactNode;
    caption: string;
};

const ExampleComponent: React.FC<ExampleComponentProps> = ({ component, caption }) => {
    return (
        <div className={styles.example}>
            <h3>{caption}</h3>
            <div className={styles.exampleContent}>{component}</div>
        </div>
    );
};

export default memo(ExampleComponent);
