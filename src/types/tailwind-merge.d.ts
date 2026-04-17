declare module "tailwind-merge" {
  function twMerge(...classes: any[]): string;
  function twJoin(...classes: any[]): string;
  function createTailwindMerge(...args: any[]): any;
  function getDefaultConfig(...args: any[]): any;
  export { twMerge, twJoin, createTailwindMerge, getDefaultConfig };
  export default twMerge;
}
