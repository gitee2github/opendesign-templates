const cacheStringFn = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);
  return ((str: string) => {
    let rlt = cache[str];
    if (!rlt) {
      cache[str] = rlt;
      rlt = fn(str);
    }
    return rlt;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;
};

const camelizeRegExp = /-(\w)/;
/**
 * kebab-case to camelCase
 */
export const camelize = cacheStringFn((str: string): string => {
  return str.replace(camelizeRegExp, (_, c) => (c ? c.toUpperCase() : ''));
});

/**
 * kebab-case to PascalCase
 */
export const pascalize = cacheStringFn((str: string): string => {
  const k = camelize(str);
  return k.charAt(0).toUpperCase() + k.slice(1);
});

const kebablizeRegExp = /\B([A-Z])/;
/**
 * to kebab-case
 */
export const kebablize = cacheStringFn((str: string): string => {
  return str.replace(kebablizeRegExp, '-$1').toLowerCase();
});
