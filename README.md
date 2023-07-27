# DAO Example

This is an example of a DAO I made following a tutorial to get a better insight on how a DAO could work.
Here is an example where votes are cast using an ERC20 Token.
Those votes are processed in the GovernanceContract, which is controlled by the TimeLock contract.
The outcome is stored in the Box Contract, which is also owned by TimeLock.

Here you can find the [Tutorial](https://www.youtube.com/watch?v=AhJtmUqhAqg&t=738s) I followed.

## Technology Stack & Tools

- Solidity (Writing Smart Contracts)
- TypeScript (Scripts for Deployment and Contract Interactions)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Hardhat-Deploy](https://github.com/wighawag/hardhat-deploy)
- [ContractsWizard](https://docs.openzeppelin.com/contracts/4.x/wizard) (Openzeppelin Contracts Wizard to create GovernorContract)
- [OpenZeppelin](https://www.openzeppelin.com/contracts) (Smart Contract Library)
- [TypeChain](https://github.com/dethcrypto/TypeChain) (Typescript bindings for Ethereum Smart Contracts)


## How it works

If you want to clone the repo and use it in your local environment follow these steps.

1. clone this repository
2. make sure you installed all dependencies:
```$ npm install```
3. start your local hardhat node: 
```$ npx hardhat node```

- try proposal script: 
```$ npx hardhat run scripts/propose.ts --network localhost```
- try vote script:
```$ npx hardhat run scripts/vote.ts --network localhost```
- try queueing and executing:
```$ npx hardhat run scripts/queue-and-execute.ts --network localhost```

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
