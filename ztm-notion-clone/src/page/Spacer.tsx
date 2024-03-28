import styles from "./Spacer.module.css";

type SpacerProps = {
    handleClick(): void;
    showHint: boolean;
}

export const Spacer = ({ handleClick, showHint }: SpacerProps) => {
    return (
        <div className={styles.spacer} onClick={handleClick}>
            {showHint && <div className="hint">Click to add a block</div>}
        </div>
    )
};