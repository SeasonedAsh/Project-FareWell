#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const URL = process.env.N8N_URL || 'http://localhost:5678'
const BASIC = process.env.N8N_BASIC || '' // "user:pass" if enabled
const outDir = process.argv[2] || './n8n/export'
fs.mkdirSync(outDir, { recursive: true })

async function main(){
  const headers = {}
  if (BASIC) headers['Authorization'] = 'Basic ' + Buffer.from(BASIC).toString('base64')
  const res = await fetch(`${URL}/rest/workflows`, { headers })
  if(!res.ok){ console.error('n8n export failed', res.status); process.exit(1) }
  const flows = await res.json()
  for (const wf of flows.data || flows){
    fs.writeFileSync(path.join(outDir, `${wf.name.replace(/\W+/g,'_')}.json`), JSON.stringify(wf, null, 2))
  }
  console.log('Exported', (flows.data||flows).length, 'workflows to', outDir)
}
main().catch(e=>{ console.error(e); process.exit(1) })
