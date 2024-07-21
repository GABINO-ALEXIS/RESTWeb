export class UpdateTodoDto {
    private constructor(
        public readonly id:number,
        public readonly text?: string,
        public readonly createdAt?: Date
    ){}

    get values(){
        const returnObj:{[key:string]:any} = {}
        if(this.text) returnObj.text = this.text
        if(this.createdAt) returnObj.createdAt = this.createdAt
        return returnObj
    }

    static create(args: {[key: string]: any}): [string?,UpdateTodoDto?]{
        const {id, text, createdAt} = args
        let newCreatedAt = createdAt

        if(!id || isNaN(Number(id))) return ['El id debe ser un nuemro']

        if(createdAt) {
            newCreatedAt = new Date(createdAt)
            if(newCreatedAt.toString() === 'Invalid Date') {
                return ['la fecha debe ser valida']
            }
        }

        return [undefined,new UpdateTodoDto(id,text,newCreatedAt)]
    }
}