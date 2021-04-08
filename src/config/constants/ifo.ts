import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'jarvis',
    address: '0x65Cd3707783C3c33495E377F1d0586e8e5accb15',
    isActive: true,
    name: 'Jarvis',
	description:
      'Jarvis Farm (JARVIS) is the next generation of Automated Market Making (AMM)',
    launchDate: 'Apr. 16',
    launchTime: '12:00 UTC',
    saleAmount: '60,000 JARVIS',
    raiseAmount: '$600,000',
    cakeToBurn: '$300,000',
    projectSiteUrl: 'https://jarvis.farm',
    currency: 'CAKE-BNB LP',
    currencyAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    tokenDecimals: 18,
    releaseBlockNumber: 6619570,
  },
]

export default ifos
