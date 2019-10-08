const _sodium = require('libsodium-wrappers');

let key = sodium.from_hex('724b092810ec86d7e35c9d067702b31ef90bc43a7b598626749914d6a3e033ed');


function encrypt_and_prepend_nonce(message) {
    let nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
    return nonce.concat(sodium.crypto_secretbox_easy(message, nonce, key));
}