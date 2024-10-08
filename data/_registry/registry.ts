import { IData } from '../_types';
import { celoChain } from '../C';
import { solanaChain } from '../S';
// import { atlas, arbitrum } from '../R';
// import { injective } from '../R';
// import { nolus } from '../R';
// import { xmtp } from '../R';
// import { optimisim } from '../R';
// import { zksync } from '../R';
// import { ethereum } from '../R';
// import { linera } from '../R';
// import { wagmi } from '../R';
// import { polygon } from '../R';
// import { scroll } from '../R';
// import { onChainkit } from '../R';
import { remixIde } from '../r/remixIde';
import { moralis } from '../m/moralis';
import { thirdweb } from '../t/thirdweb';
import { quickNode } from '../q/quickNode';
import { fhenix } from '../F/fhenix';
import { chainlink } from '../C/chainlink';
import { base } from '../b/base';
import { binance } from '../b/binance';
import { bitcoin } from '../b/bitcoin';

export const chainRegistry: Array<IData> = [
  fhenix,
  thirdweb,
  quickNode,
  celoChain,
  chainlink,
  moralis,
  solanaChain,
  remixIde,
  binance,
  base,
  bitcoin,
];
