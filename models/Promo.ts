export class Promo{

  promocodeId:number;
  promocode:string;
  startdate:Date;
  enddate:Date;
  amount:string;


  constructor(promocodeId,promocode,startdate,enddate,amount)
  {
      this.promocodeId=promocodeId;
      this.promocode=promocode;
      this.startdate=startdate;
      this.enddate=enddate;
      this.amount=amount;
  }
}
