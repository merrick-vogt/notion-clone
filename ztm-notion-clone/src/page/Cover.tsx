import { useRef, ChangeEventHandler } from 'react';
import styles from './Cover.module.css';

export const Cover = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onChangeCoverImage = () => {
        fileInputRef.current?.click();
    }

    const onCoverImageUpload:ChangeEventHandler<HTMLInputElement> = 

    return (
        <div className={styles.cover}>
            <img/>
            <button className='styles.button' onClick={onChangeCoverImage}>Change cover</button>
            <input onChange={onCoverImageUpload} style={{ display: "none" }}ref={fileInputRef} type="file"/>

        </div>
    )
}