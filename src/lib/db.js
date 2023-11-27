import { createClient } from 'redis'

const client = createClient()

client.on('error', (err) => console.log(err))

if (!client.isOpen) {
  client.connect()
}

// client.set('name', 'mario')

export { client }
