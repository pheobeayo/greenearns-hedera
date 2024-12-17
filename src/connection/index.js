import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 296;

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;

const HederaTestnet = {
  chainId: SUPPORTED_CHAIN,
  name: "hedera testnet",
  currency: "HBAR",
  explorerUrl: "https://hashscan.io/testnet/dashboard",
  rpcUrl: import.meta.env.VITE_INFURA_RPC,
};

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://localhost:5173',
  icons: ['https://localhost:5173']
}

export const configWeb3Modal = () => createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [HederaTestnet],
  projectId: import.meta.env.VITE_PROJECTID,
  enableAnalytics: false,
  themeVariables: {
    '--w3m-accent': '#015C28',
    '--w3m-border-radius-master': '10'
  }
})