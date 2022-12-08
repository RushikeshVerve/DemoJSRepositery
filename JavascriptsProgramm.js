class ClassAndObject{ 

  detail()  
  {  
console.log(this.id+" "+this.name)  
  }  
  detail2(id,name,newID){
    console.log(id+" "+name+" "+newID)
  }
}
//passing object to a variable   
var e1=new ClassAndObject(101,"Martin Roy",32);  
var e2=new ClassAndObject(102,"Duke William","Whatever");  
e1.detail2(101,"Martin Roy",32); //calling method  
e2.detail2(102,"Duke William","Whatever");  
