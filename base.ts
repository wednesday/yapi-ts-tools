import { Propertie, UnionYapiType } from "yapi"

const typeMap = {
  'string': 'string',
  'boolean': 'boolean',
  'integer': 'number',
  'number': 'number',
  'object': 'object',
  'array': 'array'
}
// let res = ''
// const defineTypes:string[] = []
const defineTypeNames: string[] = []

export interface BaseLeaf {
  name: string,
  type: UnionYapiType | 'unknown',
  isArray: boolean,
  require?: boolean,
  description?: string,
  children?: BaseLeaf[],
  parent?: BaseLeaf,
}
export const tree: BaseLeaf[] = []
export const twig: BaseLeaf[] = []

export const toBaseLeaf = (key: string, propertie: Propertie, parent?: BaseLeaf) => {
  const leaf: BaseLeaf = {
    name: key,
    type: propertie.type,
    description: propertie.description,
    isArray: false,
    parent
  }
  if (propertie.type === 'object') {
    leaf.children = []
    for (const childKey in propertie.properties) {
      if (Object.prototype.hasOwnProperty.call(propertie.properties, childKey)) {
        leaf.children.push(toBaseLeaf(childKey, propertie.properties[childKey], leaf))
      }
    }
    twig.push(leaf)
  }
  if (propertie.type === 'array') {
    leaf.isArray = true
    if (propertie.items.type === 'object') {
      leaf.children = []
      for (const childKey in propertie.items.properties) {
        if (Object.prototype.hasOwnProperty.call(propertie.items.properties, childKey)) {
          leaf.children.push(toBaseLeaf(childKey, propertie.items.properties[childKey], leaf))
        }
      }
      twig.push(leaf)
    } else {
      leaf.type = propertie.items.type
    }
  }
  leaf.type = toTypeName(leaf)
  tree.push(leaf)
  return leaf
}
const nameFactory = (value: string, parent?: BaseLeaf, isPrimary?: boolean) => {
  const name = value[0].toLocaleUpperCase() + value.slice(1, value.length)
  if (defineTypeNames.includes(name) && parent && isPrimary) {
    const fitableName = nameFactory(`${parent.name}${name}`, parent.parent)
    defineTypeNames.push(fitableName)
    return fitableName
  } else {
    defineTypeNames.push(name)
    return name
  }
}
const toTypeName = (leaf: BaseLeaf) => {
  if (leaf.type === 'array' && leaf.children) {
    return nameFactory(leaf.name, leaf.parent, true)
  } else if (leaf.type === 'object') {
    return nameFactory(leaf.name, leaf.parent, true)
  } else {
    return typeMap[leaf.type]
  }
}
