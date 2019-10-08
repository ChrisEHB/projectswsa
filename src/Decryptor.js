const _sodium = require('libsodium-wrappers');

let key = sodium.from_hex('724b092810ec86d7e35c9d067702b31ef90bc43a7b598626749914d6a3e033ed');

function decrypt_after_extracting_nonce(nonce_and_ciphertext) {
    if (nonce_and_ciphertext.length < sodium.crypto_secretbox_NONCEBYTES + sodium.crypto_secretbox_MACBYTES) {
        throw "Error message";
    }
    let nonce = nonce_and_ciphertext.slice(0, sodium.crypto_secretbox_NONCEBYTES),
        ciphertext = nonce_and_ciphertext.slice(sodium.crypto_secretbox_NONCEBYTES);
    return sodium.crypto_secretbox_open_easy(ciphertext, nonce, key);
}