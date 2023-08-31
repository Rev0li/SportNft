// Fichier de test (SportNFT.test.js)
const SportNFT = artifacts.require("SportNFT");

contract("SportNFT", (accounts) => {
  it("devrait permettre la création d'un nouveau NFT pour un sportif", async () => {
    const instance = await SportNFT.deployed();
    const sportif = accounts[0];
    const tokenURI = "lien_vers_metadonnees_du_NFT";

    await instance.createNFT(sportif, tokenURI);

    const owner = await instance.ownerOf(0);
    assert.equal(owner, sportif, "Le sportif ne possède pas le NFT");
  });
});
