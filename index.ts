// define
import { ApiTree, BaseLeaf, toBaseLeaf } from './base';
import { Propertie } from './yapi';

const middleWare = {}
const defaultConfig = {
  typeMode: false
}

const transformer = (twig: BaseLeaf[],config?:typeof defaultConfig) => {
  const _conf = {
    ...defaultConfig,
    ...config
  }
  let res:string[] = []
  for (let i = 0; i < twig.length; i++) {
    const currentLeaf = twig[i]
    let text = 
    _conf.typeMode?`type ${currentLeaf.type} = {\n`:`interface ${currentLeaf.type} {\n`
    currentLeaf.children?.forEach(item=>{
      if(item.description){
        text += `  /** ${item.description} */\n`
      }
      text += `  ${item.name}: ${item.type}${item.isArray?'[]':''};\n`
    })
    text += '}'
    res.push(text)
  }
  return res;
}
const runner = (name: string, propertie: Propertie, conf?: typeof defaultConfig) => {
  const apiTree = new ApiTree()
  toBaseLeaf({
    key: name, 
    propertie,
    apiTree
  })
  const res = transformer(apiTree.twig, conf)
  const dd = res.join('\n')
  return dd
}
const use = (fn)=>{

}

export {
  runner,
  use
}