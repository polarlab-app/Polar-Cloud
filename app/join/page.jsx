import styles from '@/src/css/login/join.module.css';
import JoinButtons from '@/components/joinButtons.jsx';
import '@/src/css/core/themes.css';

export default function Page() {
    return (
        <div className={styles.main}>
            <div className={styles.modal}>
                <JoinButtons />
                <p className={styles.login}>
                    Already have a workspace? Login <a href='https://test.com'>here!</a>
                </p>
            </div>
        </div>
    );
}
