export function getFileExtension(url: string): string {
    return url.split('?')[0].split('#')[0].split('.').pop() || '';
}

export async function getFileSize(url: string): Promise<number | null> {
    const res = await fetch(url, { method: 'HEAD' });
    const size = res.headers.get('content-length');
    return size ? Number(size) : null;
}