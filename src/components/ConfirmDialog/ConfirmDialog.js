import styles from './ConfirmDialog.module.css';

const ConfirmDialog = ({
    onDialog,
    animal
}) => {

    return (
        <div className={styles["dialog-container"]}>
            <div className={styles["info"]}>
                <h3 className={styles["message"]}>
                    Are you sure you want to delete the {animal.animal} called {animal.name}?
                </h3>
                <div className={styles["dialog-buttons"]}>
                    <button onClick={() => onDialog(true)} className={styles["yes-button"]}>Yes</button>
                    <button onClick={() => onDialog(false)} className={styles["no-button"]}>No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDialog;