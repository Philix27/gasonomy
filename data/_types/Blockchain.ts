export type IEcosystem = 'ETHEREUM' | 'POLKADOT' | 'SOLANA' | 'BITCOIN' | 'COSMOS' | 'SUBSTRATE' | 'NEAR';
export type IProgramLanguage = 'SOLIDITY' | 'TS & JS' | 'PYTHON' | 'RUST';
export type IBlockchainLayers = 'LAYER 1' | 'LAYER 2';
export type IToolsCategory = 'RPC' | 'AUTH_PROVIDER' | 'WALLET' | 'IDE';

export interface ICommon {
  name: string;
  ecosystem: IEcosystem[] | IEcosystem;
  article: string;
  shortIntro: string;
  logo: string;
  baseUrl: string;
  taxon: 'BLOCKCHAIN' | 'TOOLS' | 'PACKAGE';
}

export interface ITools {
  repoLink?: string;
  category?: IToolsCategory;
}

export interface IPackage {
  githubLink?: string;
  language?: IProgramLanguage[];
}

export interface IBlockchain extends ICommon {
  layers?: IBlockchainLayers;
}
export interface IData extends ICommon {
  tools?: ITools;
  package?: IPackage;
  blockchain?: IBlockchain;
}
