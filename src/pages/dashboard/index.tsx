import React from 'react'
import {Balance} from '../../component'
import {DiteilLayout} from '../../component/layout'
import {StatesTable, Transitions, Prices, ProgressBar} from '../../component'

export default function Dashboard() {
  return (
        <div className='dashboard'>
          <DiteilLayout
            sideContent={
              <div className="states">
                <Balance />
                <ProgressBar />
              </div>
            }
          >
            <div className="tables">
                <StatesTable />
                <Transitions />
                <Prices />
            </div>
          </DiteilLayout>
        </div>
  )
}
