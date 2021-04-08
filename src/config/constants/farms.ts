import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'JARVIS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xE1ADce5e647DdF99f3525700825b5f1Ce00849BF',
    },
    tokenSymbol: 'JARVIS',
    tokenAddresses: {
      97: '',
      56: '0xb10a7057e2402a9ef072d09a4c3085a2d1260b21',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'JARVIS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4616C9B69B6172880aBF29df75aEF9EF70F547b4',
    },
    tokenSymbol: 'JARVIS',
    tokenAddresses: {
      97: '',
      56: '0xE1ADce5e647DdF99f3525700825b5f1Ce00849BF',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.cake,
  },
]

export default farms
