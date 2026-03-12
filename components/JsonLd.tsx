"use client";

import { usePathname } from 'next/navigation';
import {
    getOrganizationSchema,
    getWebSiteSchema,
    schemaToJsonLd,
} from '@/lib/schema';
import { getPageSchemas } from '@/lib/page-schemas';

export default function JsonLd() {
    const pathname = usePathname();
    const pageSchemas = getPageSchemas(pathname);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={schemaToJsonLd({
                '@graph': [
                    getOrganizationSchema(),
                    getWebSiteSchema(),
                    ...pageSchemas
                ]
            })}
        />
    );
}
