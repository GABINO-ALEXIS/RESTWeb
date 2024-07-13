import express, { Router } from 'express'
import path from 'node:path';

interface Options {
    port: number,
    routes: Router
    public_path?: string 
}

export class Server {
    
    private app = express()
    private readonly port: number
    private readonly routes: Router
    private readonly publicPath: string

    constructor(options: Options){
        const {routes, port, public_path = '/public' } = options
        this.port = port
        this.publicPath = public_path
        this.routes = routes
    }

    async start(){

        this.app.use(express.json())

        this.app.use(express.static(this.publicPath))

        this.app.use(this.routes)
        
        this.app.get('*',(req,res) =>{
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`)
            res.sendFile(indexPath)
            return
        } )

        this.app.listen(this.port,() =>{
            console.log(`server running in port: ${this.port}`);
        } )
        
    }
}