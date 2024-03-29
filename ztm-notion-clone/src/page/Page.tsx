import { useFocusedNodeIndex } from './useFocusedNodeIndex'
import { Cover } from './Cover'
import { Spacer } from './Spacer'
import { Title } from './Title'
import { NodeTypeSwitcher } from '../Node/NodeTypeSwitcher'
import { nanoid } from 'nanoid'
import { useAppState } from '../state/AppStateContext'

export const Page = () => {
    const {title, nodes, setTitle, addNode} = useAppState()

    const [ focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({nodes})


    return (
        <>
            <Cover/>
            <div>
                <Title addNode={addNode} title={title} changePageTitle={setTitle} />
                {nodes.map((node, index) => (
                    <NodeTypeSwitcher
                        key={node.id}
                        node={node}
                        isFocused={focusedNodeIndex === index}
                        updateFocusedIndex={setFocusedNodeIndex}
                        index={index}
                    />
                ))}
                <Spacer
                handleClick={() => addNode({type: "text", value: "", id: nanoid()}, nodes.length)}
                showHint={!nodes.length}
                />
            </div>
        </>
)}
