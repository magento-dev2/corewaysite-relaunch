"use client";

import { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Plus, Type, AlignLeft, Image as ImageIcon, Code, Quote, List, FileCode } from 'lucide-react';
import { Block, BlockType } from '@/types/blocks';
import HeadingBlockEditor from './blocks/HeadingBlock';
import ParagraphBlockEditor from './blocks/ParagraphBlock';
import ImageBlockEditor from './blocks/ImageBlock';
import CodeBlockEditor from './blocks/CodeBlock';
import QuoteBlockEditor from './blocks/QuoteBlock';
import ListBlockEditor from './blocks/ListBlock';
import HtmlBlockEditor from './blocks/HtmlBlock';

interface PageBuilderProps {
    content: string;
    onChange: (content: string) => void;
}

function SortableBlock({ block, onUpdate, onDelete }: { block: Block; onUpdate: (block: Block) => void; onDelete: () => void }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: block.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style}>
            {block.type === 'heading' && <HeadingBlockEditor block={block} onChange={onUpdate} onDelete={onDelete} />}
            {block.type === 'paragraph' && <ParagraphBlockEditor block={block} onChange={onUpdate} onDelete={onDelete} />}
            {block.type === 'image' && <ImageBlockEditor block={block} onChange={onUpdate} onDelete={onDelete} />}
            {block.type === 'code' && <CodeBlockEditor block={block} onChange={onUpdate} onDelete={onDelete} />}
            {block.type === 'quote' && <QuoteBlockEditor block={block} onChange={onUpdate} onDelete={onDelete} />}
            {block.type === 'list' && <ListBlockEditor block={block} onChange={onUpdate} onDelete={onDelete} />}
            {block.type === 'html' && <HtmlBlockEditor block={block} onChange={onUpdate} onDelete={onDelete} />}
        </div>
    );
}

export default function PageBuilder({ content, onChange }: PageBuilderProps) {
    const [blocks, setBlocks] = useState<Block[]>(() => {
        try {
            return content ? JSON.parse(content) : [];
        } catch {
            return [];
        }
    });

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const updateBlocks = (newBlocks: Block[]) => {
        setBlocks(newBlocks);
        onChange(JSON.stringify(newBlocks));
    };

    const addBlock = (type: BlockType) => {
        const newBlock: Block = {
            id: `block-${Date.now()}`,
            type,
            ...(type === 'heading' && { level: 2, content: '' }),
            ...(type === 'paragraph' && { content: '' }),
            ...(type === 'image' && { url: '', alt: '' }),
            ...(type === 'code' && { language: 'javascript', code: '' }),
            ...(type === 'quote' && { content: '' }),
            ...(type === 'list' && { ordered: false, items: [''] }),
            ...(type === 'html' && { html: '' }),
        } as Block;

        updateBlocks([...blocks, newBlock]);
    };

    const updateBlock = (id: string, updatedBlock: Block) => {
        updateBlocks(blocks.map((b) => (b.id === id ? updatedBlock : b)));
    };

    const deleteBlock = (id: string) => {
        updateBlocks(blocks.filter((b) => b.id !== id));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = blocks.findIndex((b) => b.id === active.id);
            const newIndex = blocks.findIndex((b) => b.id === over.id);
            updateBlocks(arrayMove(blocks, oldIndex, newIndex));
        }
    };

    const blockTypes = [
        { type: 'heading' as BlockType, icon: Type, label: 'Heading' },
        { type: 'paragraph' as BlockType, icon: AlignLeft, label: 'Paragraph' },
        { type: 'image' as BlockType, icon: ImageIcon, label: 'Image' },
        { type: 'code' as BlockType, icon: Code, label: 'Code' },
        { type: 'quote' as BlockType, icon: Quote, label: 'Quote' },
        { type: 'list' as BlockType, icon: List, label: 'List' },
        { type: 'html' as BlockType, icon: FileCode, label: 'HTML' },
    ];

    return (
        <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Plus size={18} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Add Block</span>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {blockTypes.map(({ type, icon: Icon, label }) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => addBlock(type)}
                            className="flex flex-col items-center gap-2 p-3 bg-white hover:bg-purple-50 border border-gray-200 hover:border-purple-400 rounded-lg transition-colors"
                        >
                            <Icon size={20} className="text-purple-600" />
                            <span className="text-xs text-gray-700">{label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-4">
                        {blocks.map((block) => (
                            <SortableBlock
                                key={block.id}
                                block={block}
                                onUpdate={(updatedBlock) => updateBlock(block.id, updatedBlock)}
                                onDelete={() => deleteBlock(block.id)}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>

            {blocks.length === 0 && (
                <div className="text-center py-12 text-gray-600">
                    <p>No blocks yet. Add your first block above!</p>
                </div>
            )}
        </div>
    );
}
