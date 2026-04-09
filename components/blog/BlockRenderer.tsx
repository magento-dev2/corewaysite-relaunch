'use client';
import { Block } from '@/types/blocks';
import { useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface BlockRendererProps {
    content: string;
}

function cleanHtmlCtaButtonArrows(html: string) {
    if (!html) return '';
    return html.replace(
        />([^<]*?)\s*(?:→|➡|➜|&rarr;|&#8594;)\s*<\/a>/giu,
        (_match, label: string) => `>${label.trim()}</a>`
    );
}

function processHtml(html: string) {
    if (!html) return '';
    return cleanHtmlCtaButtonArrows(html)
        .replace(/src=["']assets\//g, 'src="/assets/')
        .replace(/class="([^"]*)"/g, (match, classNames) => {
            let style = '';

            if (/\btext-sm\b/.test(classNames)) {
                style += 'font-size: 14px; ';
                if (/\btext-gray-(300|400)\b/.test(classNames) || /\btext\s+gray-400\b/.test(classNames)) {
                    style += 'color: gray; ';
                }
            }

            if (/\btext-white\b/.test(classNames)) {
                style += 'color: white; ';
            }

            if (style) {
                return `class="${classNames}" style="${style.trim()}"`;
            }
            return match;
        });
}

function HtmlBlock({ html, className }: { html: string; className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const form = containerRef.current.querySelector('form');
        if (!form) return;

        // Check if this is the "Talk to an AI Expert" form
        const isAIExpertForm = containerRef.current.textContent?.includes('Talk to an AI Expert');
        if (!isAIExpertForm) return;

        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
            const originalBtnText = submitBtn?.innerText || 'Submit Inquiry';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Sending...';
            }

            try {
                const inputs = form.querySelectorAll('input');
                const textarea = form.querySelector('textarea');

                const data = {
                    name: inputs[0]?.value,
                    email: inputs[1]?.value,
                    message: textarea?.value,
                    subject: 'AI Expert Inquiry from Blog',
                    source: 'blog_ai_expert_form'
                };

                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    if (submitBtn) {
                        submitBtn.innerText = 'Sent Successfully!';
                        submitBtn.style.backgroundColor = '#10b981'; // Green
                    }
                    form.reset();
                    alert('Thank you! Your inquiry has been sent to our AI experts.');
                } else {
                    throw new Error(result.error || 'Failed to send');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalBtnText;
                }
            }
        };

        form.addEventListener('submit', handleSubmit);
        return () => form.removeEventListener('submit', handleSubmit);
    }, [html]);

    return (
        <div
            ref={containerRef}
            className={className}
            dangerouslySetInnerHTML={{ __html: processHtml(html) }}
        />
    );
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

    if (isHTML) {
        return (
            <HtmlBlock
                className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white blog-html-content"
                html={content}
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
                        // Replace '/blog/' with '/'
                        const imageUrl = block.url.replace('/blog/', '/');

                        return (
                            <figure key={block.id} className="my-8">
                                <div className="rounded-2xl overflow-hidden bg-gray-900">
                                    <img
                                        src={imageUrl}
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
                                    &ldquo;{block.content}&rdquo;
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
                            <HtmlBlock
                                key={block.id}
                                className="my-6 blog-html-content"
                                html={block.html}
                            />
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}
