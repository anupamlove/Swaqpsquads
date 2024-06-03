
export class Product {
    
    pcategory:"";
    pname?:String;
    desc?:String;
    pdatepost?:String;
    pexchangetype:String;
    pcoin?:Number;
    pexchange:[String];
    pemail?:String;
    pstate?:String;
   
    
    // image:[byte];
    

constructor(){
    this.pcategory="";
    this.pname="";
    this.desc="";
    this.pdatepost= "";
    this.pexchangetype="";
    this.pcoin=0;
    this.pexchange=[""];
    this.pemail="";
    this.pstate="";
}
}
