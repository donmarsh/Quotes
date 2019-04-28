export class Quote {
  public count1:number;
  public count2:number;
  public showDescription:boolean;
  constructor(public id:number, public quote:string, public author:string, public submit:string, public completeDate:Date) {
    this.showDescription=false;
    this.count1=0;
    this.count2=0;
  }
}
