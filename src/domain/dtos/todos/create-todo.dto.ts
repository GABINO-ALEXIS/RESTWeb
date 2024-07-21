export class CreateTodoDto {
    private constructor(
        public readonly text: string
    ){}

    static create(args: {[key: string]: any}): [string?,CreateTodoDto?]{
        const {text} = args
        if(!text) return ['Text property is required',undefined]

        return [undefined,new CreateTodoDto(text)]
    }
}