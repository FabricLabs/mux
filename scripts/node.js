const Mux = require('../services/mux');

async function main (input) {
  const mux = new Mux(input);
  await mux.start();
  return { id: mux.id };
}

main().catch((exception) => {
  console.error('[EXCEPTION]', exception);
}).then((output) => {
  console.log('[OUTPUT]', output);
});
