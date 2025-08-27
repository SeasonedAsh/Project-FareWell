// Data Resolver: hides Directus shape, prepares for Meili/Qdrant later
export type Block = { type: string; props: any }
export type Page = { slug: string; title?: string; blocks: Block[]; version?: number }

export async function resolvePage(slug: string): Promise<Page>{
  const url = process.env.NEXT_PUBLIC_DIRECTUS_URL
  if (!url) throw new Error('Missing NEXT_PUBLIC_DIRECTUS_URL')
  const res = await fetch(`${url}/items/pages?filter[slug][_eq]=${encodeURIComponent(slug)}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Resolver fetch failed')
  const raw = (await res.json())?.data?.[0]
  if (!raw) return { slug, title: slug, blocks: [], version: 1 }
  // Normalize
  return { slug: raw.slug, title: raw.title, blocks: raw.blocks || [], version: 1 }
}
