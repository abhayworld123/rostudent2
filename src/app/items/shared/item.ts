export class Item {
  $key: string;
  title: string;
  teachername:string;
  body: string;
  active: boolean = true;
  timeStamp: Date = new Date();
  email: string;
  subjects:number;
  subject:[any];
  TotalMarks: number;
  marks1: number;
  marks2: number;
  marks3: number;
  marks4: number;
  marks5: number;
  attendance:number;

  Batch: String;
  Testschedule: Date;
  percentage:number;
  average:number;
}
