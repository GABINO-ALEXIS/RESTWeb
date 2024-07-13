import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"

(async () => {
    main()
})()

function main() {
    const server = new Server({
        port: 8080,
        public_path: "./public",
        routes: AppRoutes.routes
    })
    server.start()
}

