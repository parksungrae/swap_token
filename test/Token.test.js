const Token = artifacts.require("Token");
const Swap = artifacts.require("Swap");

function tokens(n) {
    return web3.utils.toWei(n, 'ether');
}

contract('Swap', (accounts) => {
    let token, swap
    before(async () => {
        token = await Token.new(1000)
        swap = await Swap.new(token.address)       

        await token.transfer(swap.address, tokens(1000))
    })
    
    describe("check token info", async () => {
        it("name check", async () => {
        const tokenName = await token.name()
        assert.equal(tokenName , "myToken")
        },
        it("symbol check", async () => {
            const tokenSymbol = await token.symbol()
            assert.equal(tokenSymbol , "MY")
        },

        it("balance check", async () => {

            let tokenBal = await token.balanceOf(token.address)
            console.log(tokenBal.toString())

            let tokenBal = await token.balanceOf(token.address)
            console.log(tokenBal.toString())

            await token.transfer(ethSwap.address, tokens('1000000'))

        },
    
        it("transfer test", async () => {
            // let balance = await token.balanceOf(accounts[0])
            // console.log(web3.utils.fromWei(balance))
            let amount = await web3.utils.toWei('10', 'ether')
            token.transfer(accounts[1], amount, {from : accounts[0]})
            
            let balance0 = await token.balanceOf(accounts[0])
            let balance1 = await token.balanceOf(accounts[1])
    
            console.log(web3.utils.fromWei(balance0))
            console.log(web3.utils.fromWei(balance1))
        })
    })
    

    // it("get Swap Token", async() => {
    //     let swapBal = await token.balanceOf(swap)

    //     console.log(web3.utils.fromWei(swapBal.address))
    // })
});

