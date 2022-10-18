// define
import { BaseLeaf, toBaseLeaf, twig } from './base';
import clipboardy from 'clipboardy';
import { Propertie } from './yapi';

const transformer = (tree: BaseLeaf[]) => {
  let res:string[] = []
  for (let i = 0; i < tree.length; i++) {
    const currentLeaf = tree[i]
    // const interfaceName = currentLeaf.type === 'object' ? 
    let text = `interface ${currentLeaf.type} {\n`
    currentLeaf.children?.forEach(item=>{
      if(item.description){
        text += `  // ${item.description}\n`
      }
      text += `  ${item.name}: ${item.type}${item.isArray?'[]':''};\n`
    })
    text += '}'
    res.push(text)
  }
  return res;
}
const runner = (name: string, propertie: Propertie) => {
  toBaseLeaf(name, propertie)
  const res = transformer(twig)
  const dd = res.join('\n')
  clipboardy.writeSync(dd);
}
const use = (fn)=>{

}

export {
  runner,
  use
}