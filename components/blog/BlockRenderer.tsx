'use client';
import { Block } from '@/types/blocks';
import { useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface BlockRendererProps {
    content: string;
}

function normalizeDisplayDashes(text: string) {
    return text.replace(/(?:—|&mdash;|&#8212;|&#x2014;)/gi, '-');
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
    return cleanHtmlCtaButtonArrows(normalizeDisplayDashes(html))
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

        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            
            if (!link || !containerRef.current?.contains(link)) return;

            const href = link.getAttribute('href');
            const openModal = link.getAttribute('data-open-modal');

            // 1. Intercept audit report triggers
            if (openModal === 'audit' || href === '/free-audit' || href?.endsWith('/free-audit')) {
                e.preventDefault();
                e.stopPropagation();
                window.dispatchEvent(new CustomEvent('open-audit-modal'));
                return;
            }

            // 2. Force reload for blog-to-blog links if current page has scripts
            const hasScripts = html.includes('<script');
            if (hasScripts && (href?.startsWith('/blog/') || href?.includes(window.location.origin + '/blog/'))) {
                e.preventDefault();
                e.stopPropagation();
                window.location.assign(href);
                return;
            }

            // 3. Ensure PDF links open in new tab
            if (href?.endsWith('.pdf')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        };

        // Use capture phase to beat Next.js router listeners
        document.addEventListener('click', handleGlobalClick, true);

        // Add data-no-loader to audit links
        const auditLinks = containerRef.current.querySelectorAll('a[href="/free-audit"]');
        auditLinks.forEach(link => link.setAttribute('data-no-loader', 'true'));

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

        // Manually execute scripts in the injected HTML
        const scripts = containerRef.current.querySelectorAll('script');
        scripts.forEach(script => {
            if (script.src) {
                const newScript = document.createElement('script');
                newScript.src = script.src;
                newScript.async = false;
                document.head.appendChild(newScript);
            } else {
                try {
                    // Use window.eval to ensure functions are defined globally
                    const scriptContent = script.textContent || '';
                    if (scriptContent.trim()) {
                        (window as any).eval(scriptContent);
                    }
                } catch (e) {
                    console.error('Error executing internal script:', e);
                }
            }
        });

        // Initialize ROI calculator with multiple attempts to ensure DOM is ready
        const initROI = () => {
            if (typeof (window as any).cwUpdateROI === 'function') {
                try {
                    (window as any).cwUpdateROI();
                } catch (e) {
                    // If it fails, try a manual sync
                    const mainU = document.getElementById('cw-users') as HTMLSelectElement;
                    const sbU = document.getElementById('sb-users') as HTMLSelectElement;
                    if (mainU && sbU) {
                        sbU.value = mainU.value;
                        const event = new Event('change', { bubbles: true });
                        mainU.dispatchEvent(event);
                    }
                }
            } else {
                const selects = containerRef.current?.querySelectorAll('select');
                selects?.forEach(s => s.dispatchEvent(new Event('change', { bubbles: true })));
            }
        };

        initROI();
        const timer1 = setTimeout(initROI, 100);
        const timer2 = setTimeout(initROI, 500);

        return () => {
            form.removeEventListener('submit', handleSubmit);
            document.removeEventListener('click', handleGlobalClick, true);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
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
                                return <h1 key={block.id} {...headingProps}>{normalizeDisplayDashes(block.content)}</h1>;
                            case 2:
                                return <h2 key={block.id} {...headingProps}>{normalizeDisplayDashes(block.content)}</h2>;
                            case 3:
                                return <h3 key={block.id} {...headingProps}>{normalizeDisplayDashes(block.content)}</h3>;
                            case 4:
                                return <h4 key={block.id} {...headingProps}>{normalizeDisplayDashes(block.content)}</h4>;
                            case 5:
                                return <h5 key={block.id} {...headingProps}>{normalizeDisplayDashes(block.content)}</h5>;
                            case 6:
                                return <h6 key={block.id} {...headingProps}>{normalizeDisplayDashes(block.content)}</h6>;
                            default:
                                return null;
                        }

                    case 'paragraph':
                        return (
                            <p key={block.id} className="text-gray-300 text-lg leading-relaxed">
                                {normalizeDisplayDashes(block.content)}
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
                                        {normalizeDisplayDashes(block.caption)}
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
                                    &ldquo;{normalizeDisplayDashes(block.content)}&rdquo;
                                </p>
                                {block.author && (
                                    <cite className="text-gray-400 text-sm not-italic">
                                        - {normalizeDisplayDashes(block.author)}
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
                                    <li key={index}>{normalizeDisplayDashes(item)}</li>
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
