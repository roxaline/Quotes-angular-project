export class Quote {
    public showDescription:boolean
    constructor(public id:number, public name:string,public description:string,public author:string,public submitted:string){
        this.showDescription=false

    }
}
