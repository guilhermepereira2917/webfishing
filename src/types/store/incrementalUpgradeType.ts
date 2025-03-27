export default interface IncrementalUpgrade {
  id: string,
  name: string,
  description: string,
  values: (string | number)[],
  costs: number[],
}