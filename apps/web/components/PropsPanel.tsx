import React from 'react'
type Field = { key: string; type: 'string'|'url'|'enum'|'array'|'object' }
type Schema = { [blockType: string]: Field[] }

const defaultSchema: Schema = {
  Hero: [{key:'title',type:'string'},{key:'subtitle',type:'string'},{key:'ctaText',type:'string'}],
  CTA: [{key:'title',type:'string'},{key:'text',type:'string'},{key:'href',type:'url'},{key:'label',type:'string'}],
  Alert: [{key:'kind',type:'enum'},{key:'text',type:'string'}],
}

export function PropsPanel({ block, onChange }:{ block:any; onChange:(next:any)=>void }){
  const fields = defaultSchema[block.type] || Object.keys(block.props||{}).map(k=>({key:k,type:'string'}))
  return <div style={{border:'1px solid #eee', padding:12}}>
    <h4 style={{marginTop:0}}>Props — {block.type}</h4>
    {fields.map((f)=>{
      const val = block.props?.[f.key] ?? ''
      return <div key={f.key} style={{marginBottom:8}}>
        <label style={{display:'block',fontSize:12,opacity:.7}}>{f.key}</label>
        <input value={val} onChange={e=>onChange({...block, props:{...block.props,[f.key]:e.target.value}})} />
      </div>
    })}
  </div>
}
