import { HtmlBlock } from '@/types/blocks';
import { Trash2, GripVertical, Code as CodeIcon, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface HtmlBlockEditorProps {
    block: HtmlBlock;
    onChange: (block: HtmlBlock) => void;
    onDelete: () => void;
}

export default function HtmlBlockEditor({ block, onChange, onDelete }: HtmlBlockEditorProps) {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start gap-3">
                <div className="cursor-grab active:cursor-grabbing text-gray-500 hover:text-white transition-colors pt-2">
                    <GripVertical size={20} />
                </div>

                <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400">
                            <CodeIcon size={18} />
                            <span className="text-sm font-medium">HTML Block</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setShowPreview(!showPreview)}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                title={showPreview ? 'Hide Preview' : 'Show Preview'}
                            >
                                {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                            <button
                                type="button"
                                onClick={onDelete}
                                className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>

                    <textarea
                        value={block.html}
                        onChange={(e) => onChange({ ...block, html: e.target.value })}
                        placeholder="Enter HTML code..."
                        rows={8}
                        className="w-full bg-gray-900 border border-white/10 rounded px-3 py-2 text-white text-sm font-mono focus:outline-none focus:border-purple-500 resize-none"
                    />

                    {showPreview && block.html && (
                        <div className="border-t border-white/10 pt-3">
                            <div className="text-xs text-gray-400 mb-2 font-medium">Preview:</div>
                            <div
                                className="bg-gray-900 rounded-lg p-4 prose prose-invert prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: block.html }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
