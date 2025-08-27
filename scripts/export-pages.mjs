#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const URL = process.env.DIRECTUS_URL || 'http://localhost:8055'
const TOKEN = process.env.DIRECTUS_TOKEN
if (!TOKEN) { console.error('Missing DIRECTUS_TOKEN'); process.exit(1) }

const outDir = process.argv[2] || './content/pages'
fs.mkdirSync(outDir, { recursive: true })

async function main(){
  const res = await fetch(`${URL}/items/pages?limit=-1`, { headers: { Authorization: `Bearer ${TOKEN}` } })
  if(!res.ok){ console.error('Fetch pages failed', res.status); process.exit(1) }
  const { data } = await res.json()
  for (const p of data){
    const fp = path.join(outDir, `${p.slug}.page.json`)
    fs.writeFileSync(fp, JSON.stringify({ slug: p.slug, title: p.title, blocks: p.blocks, version: 1 }, null, 2))
  }
  console.log('Exported', data.length, 'pages to', outDir)
}
main().catch(e=>{ console.error(e); process.exit(1) })
