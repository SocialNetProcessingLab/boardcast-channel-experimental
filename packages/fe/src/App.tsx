import { Button, Typography } from '@mui/material'
import { AsyncCall } from 'async-call-rpc'
import { BroadcastMessageChannel } from 'async-call-rpc/utils/web/broadcast.channel'
import React from 'react'
import create from 'zustand'

const useStore = create(() => ({}))

type Server = {
  message(): Promise<void>
}

const server = AsyncCall<Server>(
  {
    message: () => {
      console.log('hello, world!')
      return 123
    }
  },
  {
    channel: new BroadcastMessageChannel('main')
  }
)

export const App: React.FC = function App () {
  // ???
  useStore()
  return (
    <>
      <Typography variant='h1'>Hello world!</Typography>
      <Button
        onClick={() => {
          server.message().then(console.log)
          console.log('click')
        }}>
        Click
      </Button>
    </>
  )
}
