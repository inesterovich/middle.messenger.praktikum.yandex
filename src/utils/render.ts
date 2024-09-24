import Block from "../framework/Block";
import { BlockProps } from "../types";


export function render(query: string, block: Block) {
    const root = document.querySelector(query);

    const blockContent = block.getContent();

    if (blockContent) {
        root?.appendChild(blockContent);
        block.dispatchComponentDidMount();
    }

    return root;

   
}
