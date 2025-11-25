import { ImageBlock } from '@/types/blocks';
import { Trash2, GripVertical, Image as ImageIcon } from 'lucide-react';

interface ImageBlockEditorProps {
    block: ImageBlock;
    onChange: (block: ImageBlock) => void;
    onDelete: () => void;
}

export default function ImageBlockEditor({ block, onChange, onDelete }: ImageBlockEditorProps) {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start gap-3">
                <div className="cursor-grab active:cursor-grabbing text-gray-500 hover:text-white transition-colors pt-2">
                    <GripVertical size={20} />
                </div>

                <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400">
                            <ImageIcon size={18} />
                            <span className="text-sm font-medium">Image Block</span>
                        </div>
                        <button
                            type="button"
                            onClick={onDelete}
                            className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <input
                        type="url"
                        value={block.url}
                        onChange={(e) => onChange({ ...block, url: e.target.value })}
                        placeholder="Image URL..."
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                    />

                    <input
                        type="text"
                        value={block.alt}
                        onChange={(e) => onChange({ ...block, alt: e.target.value })}
                        placeholder="Alt text..."
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                    />

                    <input
                        type="text"
                        value={block.caption || ''}
                        onChange={(e) => onChange({ ...block, caption: e.target.value })}
                        placeholder="Caption (optional)..."
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                    />

                    {block.url && (
                        <div className="rounded-lg overflow-hidden bg-gray-900">
                            <img src={block.url} alt={block.alt} className="w-full h-auto" />
                            {block.caption && (
                                <p className="text-sm text-gray-400 text-center py-2">{block.caption}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
