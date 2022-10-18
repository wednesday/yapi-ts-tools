export const YapiType = ['string' , 'boolean' , 'integer' , 'object' , 'array' , 'number'] as const
export type UnionYapiType = typeof YapiType[number]

interface BasePropertie<T extends UnionYapiType> {
  type: T,
  description?: string,
  example?: string | boolean,
  required?: string[],
  default?: string | boolean | number,
  $$ref?: string
}
interface NormalPropertie extends BasePropertie<'string' | 'boolean' | 'integer' | 'number'> {
  type: 'string' | 'boolean' | 'integer' | 'number',
}
interface ObjectPropertie extends BasePropertie<'object'> {
  type: 'object',
  properties: {
    [s in string]: Propertie
  },
}
interface ArrayPropertie extends BasePropertie<'array'> {
  type: 'array',
  items: Propertie,
}
export type Propertie = NormalPropertie | ObjectPropertie | ArrayPropertie
 