import { Hono } from "hono"
import { serve } from "@hono/node-server"
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

import { Router } from "routes/Router"

export class HTTPServer {
  constructor(
    public router: Router
  ) {}

  start() {
    const app = new Hono()
    app.use('*', prettyJSON(), logger(), cors())

    this.router.register(app)

    serve({
      fetch: app.fetch,
      port: 8000,
    }, (info) => {
      console.log(`Listening on http://localhost:${info.port}`)
    })
  }
}
