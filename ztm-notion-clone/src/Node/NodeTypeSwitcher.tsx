import { NodeType, NodeData } from '../utils/types';
import { BasicNode } from './BasicNode';
import { PageNode } from './PageNode';
import { ImageNode } from './ImageNode';

type NodeTypeSwitcherProps = {
    node: NodeData;
    updateFocusedIndex: (index: number) => void;
    isFocused: boolean;
    index: number;
};

const TEXT_NODE_TYPES: NodeType[] = [
    'text',
    'list',
    'heading1',
    'heading2',
    'heading3',
];

export const NodeTypeSwitcher = ({
    node,
    isFocused,
    index,
    updateFocusedIndex
}: NodeTypeSwitcherProps) => {
    if(TEXT_NODE_TYPES.includes(node.type)) {
        return <BasicNode
            node={node}
            index={index}
            isFocused={isFocused}
            updateFocusedIndex={updateFocusedIndex}
        />
    }

    if (node.type === 'page') {
        return <PageNode node={node} isFocused={isFocused} index={index} />
    }

    if (node.type === 'image') {
        return <ImageNode node={node} isFocused={isFocused} index={index} />;
    }

    return null;
}