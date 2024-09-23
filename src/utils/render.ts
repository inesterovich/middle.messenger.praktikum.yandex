import { Block, BlockProps } from "./Block";

export function render<T extends BlockProps>(query: string, block: Block<T>) {
    const root = document.querySelector(query);

    const blockContent = block.getContent();

    if (blockContent) {
        root?.appendChild(blockContent);
        block.dispatchComponentDidMount();
    }

    return root;

   
}
