const Token = artifacts.require("Token");

contract('Token', (accounts) => {

    before(async () => {
        token = await Token.deployed()
    })

    it("gives token to owner", async () => {
        let balance = await token.balanceOf(accounts[0])
        console.log(web3.utils.fromWei(balance))
    })

});