export class quotes {
    public showDescription:boolean;
    constructor(public quote:string, public author:string, public description:string,public completeDate:Date){
        this.showDescription=false;
    }
}
