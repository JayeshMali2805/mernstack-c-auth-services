import { Config } from './config/index.js'
import logger from './config/logger.js'
import app from './app.js'

const startServer = () => {
  const PORT = Config.PORT === undefined ? undefined : Number(Config.PORT)
  if (
    PORT !== undefined &&
    (!Number.isInteger(PORT) || PORT < 0 || PORT > 65535)
  ) {
    throw new Error('PORT must be a valid TCP port number')
  }

  try {
    app.listen(PORT, () => {
      logger.info('Server is listening on port', { port: PORT })
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
