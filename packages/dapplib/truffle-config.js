require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture student cost shift pupil imitate problem slot giant'; 
let testAccounts = [
"0xd34004e7447c2075ac0afa1df1557f576d6b9e15a60d3aa2f3af51560120e293",
"0x486f8f8e1dd97cc4a01d6c45e92fd6d4f6b3f6a56f4c48dde7e58168c206df11",
"0xfc2ec26803fd596397a59446bf2d2b83d62fb8304cdb6a7fdbc80a8a189efff8",
"0x48e1d47629623721cca07e2b7dd50e772e6dff21a23d68d3cb5546f6fd4555b5",
"0xbc27ef2db9f61fd0f30a3cf2e5463fb906989de7ce97c290cc0b2b238a0f8f8c",
"0xd7009edeea36bd36a9e0b147f54e68e1ba418d6af2ec82f15a0840efa19f7e77",
"0xfaf020c7f2636b8d465809eeabd4a63382e721181f751f54a2c6f47cabc33969",
"0x23e678c4086839ee57013a7e373d08770d8f0a378e2952b214c857c4efa2bb56",
"0x6d2e59aaa62e260775101dbadcc54fb9b1e77db6d6223738079745789f7db0fd",
"0xe5fae6a14a4f3a607e60d4e2cc1d8a0f5db9aa971c43f546a0b24bedc41596ae"
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

