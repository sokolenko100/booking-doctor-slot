/**
 * async delay
 */
export function delay(callback, ms: number): Promise<void> {
  return new Promise(() => {
    setTimeout(callback, ms);
  });
}
