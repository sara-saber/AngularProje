export class Users {
    id!: string
    name: string = ""
    password: string = ""
    email: string = ""
    phone: number = 0
    isActive:boolean=false
    creationDate: Date = new Date()
}
