//Constants for deployment scripts

//minDelay TimeLock Contract
export const MIN_DELAY = 3600;

//GovernorContract params
export const VOTING_PERIOD = 5;
export const VOTING_DELAY = 1;
export const QUORUM_PERCENTAGE = 4;

//0 Address
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";


//SCRIPTS HELPERS
//propose.ts
export const NEW_STORE_VALUE = 77;
export const FUNC = "store";
export const PROPOSAL_DESCRIPTION = "Proposal Nr.1, Store Nr 77 in Box";

//Local Dev Chains
export const developmentChains = ["hardhat", "localhost"];
//File for storing proposals
export const proposalsFile = "proposals.json";
