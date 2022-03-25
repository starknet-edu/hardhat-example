# Hardhat example repo

This repo can be used as a base for a StarkNet project using hardhat

## Steps performed to initialize this repo

**Disclaimer** this repo is not configured to use the dockerized starknet-devnet nor starknet-cli

* First we install hardhat as a dev dependency and we initialize the repo

```bash
npm i -D hardhat
npx hardhat init
```

* Several options are possible, we chose to create a TypeScript repo so we select this option:

`Create an advanced sample project that uses TypeScript`

* The choice for that hardhat project root and the gitignore is yours

* The choice wether to install or not the dependencies is also yours though it's recommended to install them (some can be removed)

* One the hardhat repo is initialized you can install shardlabs' starknet hardhat plugin

```bash
npm i -D @shardlabs/starknet-hardhat-plugin
```

* Feel free to configure hardhat as you wish though an example can be found [here](hardhat.config.ts)
* An example of prettier config can be found [here](.prettierrc)
* You can also check in the [`package.json`](package.json) file and copy the scripts you like. Please note that the `--disable-hint-validation` flag is not yet available.
* A simple test file can be found [here](test/test.spec.ts)

## Contribute

If you want to contribute, feel free to submit a PR with a small description of your improvement
