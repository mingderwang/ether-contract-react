import React from 'react'
import { today, CurrentProvider, SXContractComponent, Contract_ro, ConnectComponent } from '@nftaftermarket/superxerox2'
import '@nftaftermarket/superxerox2/dist/index.css'

const App = () => {
  (async function run() {
    const x: any = await CurrentProvider.getNetwork()
    console.log('πcurrent network: ', x.name)
    if ('ropsten' === x.name) {

      Contract_ro.getNetFlow()
        .then((x: any) => {
          today().then(console.log)
          console.log('π§π»ββοΈ ', x)
        })
    }
  })()
  return <>
    <SXContractComponent text='π»' />
    <ConnectComponent text=" π" />
  </>
}

export default App
