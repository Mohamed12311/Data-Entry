var a = document.getElementById('m1');
var b = document.getElementById('m2');
var c = document.getElementById('m3');
var d = document.getElementById('m4');





var cont =[];

function As(){
var product={
    name:a.value ,
    price:b.value ,
    ec :c.value ,
    act:d.value
}
cont.push(product);
console.log(product);

displayProduct();
}




function displayProduct(){
    var t=0;
    var cartona=``;
    for(var i=0 ; i<cont.length ; i++){
     cartona+=
     `<tr>  

     <td> ${   i   }  </td>
    <td> ${    cont[i].name   }  </td>  
    <td> ${    cont[i].price  } </td>  
    <td>  ${   cont[i].ec   } </td>   
    <td>  ${   cont[i].act  }  </td>  


      <tr>   `
      
    t+=parseInt( cont[i].price );
    
    document.getElementById('w1').value=t;
    }
    document.getElementById("Tablebady").innerHTML =cartona;



}


