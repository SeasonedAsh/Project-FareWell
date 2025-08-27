#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const URL = process.env.DIRECTUS_URL || 'http://localhost:8055'
const TOKEN = process.env.DIRECTUS_TOKEN
if (!TOKEN) { console.error('Missing DIRECTUS_TOKEN'); process.exit(1) }

const outDir = process.argv[2] || './infra/directus-schema/export'
fs.mkdirSync(outDir, { recursive: true })

async function main(){
  const res = await fetch(`${URL}/schemas/export`, { headers: { Authorization: `Bearer ${TOKEN}` } })
  if(!res.ok){ console.error('Export failed', res.status); process.exit(1) }
  const data = await res.json()
  fs.writeFileSync(path.join(outDir, 'snapshot.json'), JSON.stringify(data, null, 2))
  console.log('Directus schema exported to', path.join(outDir, 'snapshot.json'))
}
main().catch(e=>{ console.error(e); process.exit(1) })
