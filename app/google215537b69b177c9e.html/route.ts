export async function GET() {
    const verificationContent = `google-site-verification: google215537b69b177c9e.html`;

    return new Response(verificationContent, {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
