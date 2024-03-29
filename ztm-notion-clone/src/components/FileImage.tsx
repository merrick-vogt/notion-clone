import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { Loader } from './Loader'
import styles from './utils.module.css'

type FileImageProps = {
    filePath: string

}

export const FileImage = ({ filePath }: FileImageProps) => {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const downloadImage = async (filePath: string) => {
            setLoading(true);
            const { data } = await supabase.storage.from('images').download(filePath)
            if (data) {
                const url = URL.createObjectURL(data)
                setImage(url)
                setLoading(false)
            }
        }
        if (filePath && filePath.length > 0) {
            downloadImage(filePath)
        }
    }, [filePath])

    if (loading) {
        return <div style={styles.centeredFlex}><Loader /></div>
    }
}