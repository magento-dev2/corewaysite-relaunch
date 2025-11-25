import { Block } from '@/types/blocks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface BlockRendererProps {
    content: string;
}

export default function BlockRenderer({ content }: BlockRendererProps) {
    let blocks: Block[] = [];
    let isHTML = false;

    try {
        blocks = JSON.parse(content);
        // Check if it's actually an array of blocks
        if (!Array.isArray(blocks) || (blocks.length > 0 && !blocks[0].type)) {
            isHTML = true;
        }
    } catch {
        // If JSON parsing fails, treat as HTML
        isHTML = true;
    }

    // Render legacy HTML content
    if (isHTML) {
        return (
            <div
                className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        );
    }

    // Render new block-based content
    return (
        <div className="space-y-6">
            {blocks.map((block) => {
                switch (block.type) {
                    case 'heading':
                        const headingProps = {
                            className: "font-bold text-white leading-tight",
                            style: { fontSize: `${2.5 - block.level * 0.25}rem` }
                        };

                        switch (block.level) {
                            case 1:
                                return <h1 key={block.id} {...headingProps}>{block.content}</h1>;
                            case 2:
                                return <h2 key={block.id} {...headingProps}>{block.content}</h2>;
                            case 3:
                                return <h3 key={block.id} {...headingProps}>{block.content}</h3>;
                            case 4:
                                return <h4 key={block.id} {...headingProps}>{block.content}</h4>;
                            case 5:
                                return <h5 key={block.id} {...headingProps}>{block.content}</h5>;
                            case 6:
                                return <h6 key={block.id} {...headingProps}>{block.content}</h6>;
                            default:
                                return null;
                        }

                    case 'paragraph':
                        return (
                            <p key={block.id} className="text-gray-300 text-lg leading-relaxed">
                                {block.content}
                            </p>
                        );

                    case 'image':
                        return (
                            <figure key={block.id} className="my-8">
                                <div className="rounded-2xl overflow-hidden bg-gray-900">
                                    <img
                                        src={block.url}
                                        alt={block.alt}
                                        className="w-full h-auto"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="text-center text-gray-400 text-sm mt-3">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case 'code':
                        return (
                            <div key={block.id} className="rounded-xl overflow-hidden my-6">
                                <SyntaxHighlighter language={block.language} style={vscDarkPlus}>
                                    {block.code}
                                </SyntaxHighlighter>
                            </div>
                        );

                    case 'quote':
                        return (
                            <blockquote key={block.id} className="border-l-4 border-purple-500 pl-6 py-4 my-6 bg-white/5 rounded-r-lg">
                                <p className="text-white text-xl italic leading-relaxed mb-2">
                                    "{block.content}"
                                </p>
                                {block.author && (
                                    <cite className="text-gray-400 text-sm not-italic">
                                        — {block.author}
                                    </cite>
                                )}
                            </blockquote>
                        );

                    case 'list':
                        const ListTag = block.ordered ? 'ol' : 'ul';
                        return (
                            <ListTag
                                key={block.id}
                                className={`space-y-2 text-gray-300 text-lg ${block.ordered ? 'list-decimal' : 'list-disc'
                                    } list-inside`}
                            >
                                {block.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ListTag>
                        );

                    case 'html':
                        return (
                            <div
                                key={block.id}
                                className="my-6"
                                dangerouslySetInnerHTML={{ __html: block.html }}
                            />
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}
