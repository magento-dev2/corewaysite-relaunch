import { ParagraphBlock } from '@/types/blocks';
import { Trash2, GripVertical } from 'lucide-react';

interface ParagraphBlockEditorProps {
    block: ParagraphBlock;
    onChange: (block: ParagraphBlock) => void;
    onDelete: () => void;
}

export default function ParagraphBlockEditor({ block, onChange, onDelete }: ParagraphBlockEditorProps) {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start gap-3">
                <div className="cursor-grab active:cursor-grabbing text-gray-500 hover:text-white transition-colors pt-2">
                    <GripVertical size={20} />
                </div>

                <div className="flex-1">
                    <button
                        type="button"
                        onClick={onDelete}
                        className="float-right text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 size={18} />
                    </button>

                    <textarea
                        value={block.content}
                        onChange={(e) => onChange({ ...block, content: e.target.value })}
                        placeholder="Enter paragraph text..."
                        rows={4}
                        className="w-full bg-transparent border-none text-white text-base leading-relaxed focus:outline-none placeholder:text-gray-600 resize-none"
                    />
                </div>
            </div>
        </div>
    );
}
