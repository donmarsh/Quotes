export class Quote {
  public count:number;
  public showDescription:boolean;
  constructor(public id:number, public quote:string, public author:string, public submit:string, public completeDate:Date) {
    this.showDescription=false
    this.count=0
  }
}
