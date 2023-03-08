# DAO Example

This is an example of a DAO I made following a tutorial to get a better insight on how to code a DAO on my own in the future.

Here you can find the [Tutorial](https://www.youtube.com/watch?v=AhJtmUqhAqg&t=738s)

## Technology Stack & Tools

- Solidity (Writing Smart Contracts)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [ContractsWizard](https://docs.openzeppelin.com/contracts/4.x/wizard) (Openzeppelin Contracts Wizard to create GovernorContract)


## How it works

If you want to clone the repo and use it in your local environment follow these steps.

1. clone this repository
2. make sure you installed all dependencies:
```$ npm install```
3. start your local hardhat node: 
```$ npx hardhat node```
4. try proposal script: 
```$ npx hardhat run scripts/propose.ts --network localhost```

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.