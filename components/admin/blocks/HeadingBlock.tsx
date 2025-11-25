import { HeadingBlock } from '@/types/blocks';
import { Trash2, GripVertical } from 'lucide-react';

interface HeadingBlockEditorProps {
    block: HeadingBlock;
    onChange: (block: HeadingBlock) => void;
    onDelete: () => void;
}

export default function HeadingBlockEditor({ block, onChange, onDelete }: HeadingBlockEditorProps) {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start gap-3">
                <div className="cursor-grab active:cursor-grabbing text-gray-500 hover:text-white transition-colors pt-2">
                    <GripVertical size={20} />
                </div>

                <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                        <select
                            value={block.level}
                            onChange={(e) => onChange({ ...block, level: parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6 })}
                            className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500"
                        >
                            <option value="1">H1</option>
                            <option value="2">H2</option>
                            <option value="3">H3</option>
                            <option value="4">H4</option>
                            <option value="5">H5</option>
                            <option value="6">H6</option>
                        </select>

                        <button
                            type="button"
                            onClick={onDelete}
                            className="ml-auto text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <input
                        type="text"
                        value={block.content}
                        onChange={(e) => onChange({ ...block, content: e.target.value })}
                        placeholder="Enter heading text..."
                        className="w-full bg-transparent border-none text-white text-2xl font-bold focus:outline-none placeholder:text-gray-600"
                        style={{ fontSize: `${2.5 - block.level * 0.25}rem` }}
                    />
                </div>
            </div>
        </div>
    );
}
