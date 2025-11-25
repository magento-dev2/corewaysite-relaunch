import { CodeBlock } from '@/types/blocks';
import { Trash2, GripVertical, Code as CodeIcon } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockEditorProps {
    block: CodeBlock;
    onChange: (block: CodeBlock) => void;
    onDelete: () => void;
}

export default function CodeBlockEditor({ block, onChange, onDelete }: CodeBlockEditorProps) {
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
                                <CodeIcon size={18} />
                                <span className="text-sm font-medium">Code Block</span>
                            </div>
                            <select
                                value={block.language}
                                onChange={(e) => onChange({ ...block, language: e.target.value })}
                                className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500"
                            >
                                <option value="javascript">JavaScript</option>
                                <option value="typescript">TypeScript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="css">CSS</option>
                                <option value="html">HTML</option>
                                <option value="json">JSON</option>
                                <option value="bash">Bash</option>
                            </select>
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
                        value={block.code}
                        onChange={(e) => onChange({ ...block, code: e.target.value })}
                        placeholder="Enter code..."
                        rows={8}
                        className="w-full bg-gray-900 border border-white/10 rounded px-3 py-2 text-white text-sm font-mono focus:outline-none focus:border-purple-500 resize-none"
                    />

                    {block.code && (
                        <div className="rounded-lg overflow-hidden">
                            <SyntaxHighlighter language={block.language} style={vscDarkPlus}>
                                {block.code}
                            </SyntaxHighlighter>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
