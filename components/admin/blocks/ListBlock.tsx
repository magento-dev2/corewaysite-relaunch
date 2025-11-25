import { ListBlock } from '@/types/blocks';
import { Trash2, GripVertical, List as ListIcon, Plus, X } from 'lucide-react';

interface ListBlockEditorProps {
    block: ListBlock;
    onChange: (block: ListBlock) => void;
    onDelete: () => void;
}

export default function ListBlockEditor({ block, onChange, onDelete }: ListBlockEditorProps) {
    const addItem = () => {
        onChange({ ...block, items: [...block.items, ''] });
    };

    const updateItem = (index: number, value: string) => {
        const newItems = [...block.items];
        newItems[index] = value;
        onChange({ ...block, items: newItems });
    };

    const removeItem = (index: number) => {
        onChange({ ...block, items: block.items.filter((_, i) => i !== index) });
    };

    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start gap-3">
                <div className="cursor-grab active:cursor-grabbing text-gray-500 hover:text-white transition-colors pt-2">
                    <GripVertical size={20} />
                </div>

                <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-gray-400">
                                <ListIcon size={18} />
                                <span className="text-sm font-medium">List Block</span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => onChange({ ...block, ordered: false })}
                                    className={`px-3 py-1 text-xs rounded ${!block.ordered ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400'}`}
                                >
                                    Bulleted
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onChange({ ...block, ordered: true })}
                                    className={`px-3 py-1 text-xs rounded ${block.ordered ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400'}`}
                                >
                                    Numbered
                                </button>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={onDelete}
                            className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {block.items.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-gray-500 text-sm w-6">
                                    {block.ordered ? `${index + 1}.` : '•'}
                                </span>
                                <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => updateItem(index, e.target.value)}
                                    placeholder="List item..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeItem(index)}
                                    className="text-red-400 hover:text-red-300"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={addItem}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm"
                    >
                        <Plus size={16} />
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    );
}
