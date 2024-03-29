import { NodeType } from "../utils/types";
import { useEffect, useState } from "react";
import { useOverflowsScreenBottom } from "./useOverflowsScreenBottom";
import styles from "./CommandPanel.module.css";
import cx from "classnames";

type CommandPanelProps = {
    nodeText: string;
    selectItem: (nodeType: NodeType) => void;
}

type SupportedNodeType = {
    value: NodeType;
    name: string;
}

const supportedNodeTypes: SupportedNodeType[] = [
    { value: "text", name: "Text" },
    { value: "list", name: "List" },
    { value: "page", name: "Page"},
    { value: "image", name: "Image"},
    { value: "heading1", name: "Heading 1" },
    { value: "heading2", name: "Heading 2" },
    { value: "heading3", name: "Heading 3" },
]

export const CommandPanel = ({nodeText, selectItem}: CommandPanelProps) => {
    const [selectItemIndex, setSelectedItemIndex] = useState(0);

    const { overflows, ref } = useOverflowsScreenBottom();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === "Enter") {
                selectItem(supportedNodeTypes[selectItemIndex].value)
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }

    }, [selectItemIndex, selectItem])

    useEffect(() => {
        const normalizedValue = nodeText.toLowerCase().replace(/\//,"");
        setSelectedItemIndex(
            supportedNodeTypes.findIndex(item => item.value.match(normalizedValue))
        )
    }, [nodeText])

    return (
        <div ref={ref}
            className={
                cx(styles.panel, {
                    [styles.reverse]: overflows,
                })
            }
        >
            <div className={styles.title}>Blocks</div>
                <ul>
                    {supportedNodeTypes.map((type, index) => {
                          const selected = selectItemIndex === index;
                          
                          return <li 
                                    key={type.value}
                                    className={
                                        cx({
                                            [styles.selected]: selected,
                                        })
                                    } 
                                    onClick={() => selectItem(type.value)}
                                >{type.name}</li>
                    })}
                </ul>        
            </div>
    )

}