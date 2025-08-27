import { useState } from 'react'
import Link from 'next/link'
import { PropsPanel } from '../../components/PropsPanel'
import { PageRenderer } from '../../components/PageRenderer'

export default function EditorHome(){
  const [schema,setSchema]=useState<any[]>([{type:'Hero',props:{title:'LexiNAV',subtitle:'NAV gjort menneskelig',ctaText:'Prøv demo'}}])
  const [selected,setSelected]=useState<number|null>(0)
  const selectedBlock = selected!=null ? schema[selected] : null
  return <main className="container">
    <h1>Editor</h1>
    <p>Velg en blokk for å redigere props. Gå til <Link href="/editor/home">/editor/home</Link> for Directus-integrasjon.</p>
    <div style={{display:'grid',gridTemplateColumns:'280px 1fr',gap:16}}>
      <aside>
        {schema.map((b,i)=>(
          <div key={i} onClick={()=>setSelected(i)} style={{cursor:'pointer',padding:8,border:'1px solid #ddd',marginBottom:8, background: selected===i?'#f8f8f8':'white'}}>
            <strong>{b.type}</strong>
          </div>
        ))}
        <button className="btn" onClick={()=>setSchema([...schema,{type:'CTA',props:{title:'Bli med',label:'Meld meg på',href:'#'}}])}>+ CTA</button>
      </aside>
      <section>
        <PageRenderer schema={schema} />
        {selectedBlock && <PropsPanel block={selectedBlock} onChange={(next)=>{
          const copy=[...schema]; copy[selected!]=next; setSchema(copy)
        }} />}
      </section>
    </div>
  </main>
}
