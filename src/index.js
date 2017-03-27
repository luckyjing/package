export async function testPromise() {
  return await new Promise((resovle) => {
    setTimeout(() => {
      resovle({
        name: 'sjx',
      });
    }, 2000);
  });
}
