import { QuoteBlock } from '@/types/blocks';
import { Trash2, GripVertical, Quote as QuoteIcon } from 'lucide-react';

interface QuoteBlockEditorProps {
    block: QuoteBlock;
    onChange: (block: QuoteBlock) => void;
    onDelete: () => void;
}

export default function QuoteBlockEditor({ block, onChange, onDelete }: QuoteBlockEditorProps) {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start gap-3">
                <div className="cursor-grab active:cursor-grabbing text-gray-500 hover:text-white transition-colors pt-2">
                    <GripVertical size={20} />
                </div>

                <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400">
                            <QuoteIcon size={18} />
                            <span className="text-sm font-medium">Quote Block</span>
                        </div>
                        <button
                            type="button"
                            onClick={onDelete}
                            className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <textarea
                        value={block.content}
                        onChange={(e) => onChange({ ...block, content: e.target.value })}
                        placeholder="Enter quote text..."
                        rows={3}
                        className="w-full bg-transparent border-l-4 border-purple-500 pl-4 text-white text-lg italic leading-relaxed focus:outline-none placeholder:text-gray-600 resize-none"
                    />

                    <input
                        type="text"
                        value={block.author || ''}
                        onChange={(e) => onChange({ ...block, author: e.target.value })}
                        placeholder="Author (optional)..."
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                    />
                </div>
            </div>
        </div>
    );
}
