<script>  
class Bike  
{  
  constructor()  
  {  
    this.company="Honda";  
  }  
}  
class Vehicle extends Bike {  
  constructor(name,price) {  
   super();  
    this.name=name;  
    this.price=price;  
  }   
}  
var v = new Vehicle("Shine","70000");  
document.writeln(v.company+" "+v.name+" "+v.price);  
</script>  
