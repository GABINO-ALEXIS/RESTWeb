import { Server } from "./presentation/server"

(async () => {
    main()
})()

function main() {
    const server = new Server({
        PORT: 8080,
        PUBLIC_PATH: "./public"
    })
    server.start()
}