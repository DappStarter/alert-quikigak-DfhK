require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike rival pizza honey guess area slot gaze'; 
let testAccounts = [
"0x1c9e106a4de8e71c9aac757cf03f0e228f3f09b33cda6cf0a623fd30cb0bd62e",
"0xa54c4703d764578a44bc7eec01d7a73dbed0f3398becf5ac0f2950b3722dd5eb",
"0x7b9f783691938ea5295bab68b75f24b0593daacb1692de36bc284cbf3d1de4a4",
"0x81b4219830ff8893850b2360d693dcfa470d4c0ed9f1d7a45f23226e4667fdc1",
"0x6f81be8746068c9aa8137f7a14d38edcf09e3ad28fba5a661a2729db4a474c7d",
"0x647b6d71a71f60a76d281c623e1174b19d2d0c2b165e29d6066077fcb4eb0d0a",
"0xebf679e189d5b137aaf1844891b2a0d618e915523c16e19985ffd9d866666e33",
"0xe8f2068d0480b2aa81049bef90b4d73521c6b1159a868e84184c740e62c24360",
"0xca5708219624c6c86248a1d41cc1d66968a2f75bde70e877edd6d0f9f0d56b35",
"0x8581363c40b1df343bc58ba15448cf6bb9b36510d2551a47274353d0f82b7436"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

