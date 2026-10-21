if (typeof importScripts === 'function') {
  importScripts('pow.js', 'names.js', 'wallet.js');
}

globalThis.ClawdBackground = {
  shieldReset: 'The shield pool was reset. The 1.99 test CLAWD in the old pool stays stuck.',
  rpc: globalThis.ClawdWallet ? globalThis.ClawdWallet.RPC : '',
  unlock(seed) {
    return globalThis.ClawdWallet.createOrRestore(seed);
  },
};
