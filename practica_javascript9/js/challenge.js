
function Product(nameProduct, descriptionProduct, costProduct, catProduct, gainProduct, pricesProduct,salesProduct,expirationProduct) {
    
    this.name = nameProduct;
    this.description = descriptionProduct;
    this.cost = costProduct;
    this.category = catProduct;
    this.gain = gainProduct;
    this.prices = pricesProduct;
    this.sales = salesProduct;
    this.expiration = expirationProduct;
    this.priceSale = 0 //this.priceSaleFunction();

    this.priceSaleFunction = function() {
        //con esto se saca solo la ganacia + costo del producto
        result = (this.cost*this.gain) + this.cost
        this.priceSale=result;
        return result
    }

    this.getDateExpiration = function(){
        let today = new Date();
        let expDate = new Date(this.expiration);
        let diff_in_millisenconds = expDate-today
         // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días
        let day_as_milliseconds = 86400000;
        let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
        return diff_in_days.toFixed(2)
    }

    this.averageSixMonths=function(){
        let sum = this.prices.reduce((total,item)=> total + item ,0)
        let avg = sum/ this.prices.length
        return avg.toFixed(2)

    }

    
}
let productsCollection = [];

productsCollection[0] = new Product('Tabaco Cubano','sabroso',100,'Tabaco',0.20,[15,20,30,15,90,20],20,'2021/04/02');
productsCollection[1] = new Product('Pippa Cristal','facil de limpiar',90,'Pippas',0.20,[90,85,70,100,90,120],60,'2021/11/02');
productsCollection[2] = new Product('Pippa Madera','facil de limpiar',120,'Pippas',0.20,[90,85,70,100,90,120],40,'2021/10/02');
productsCollection[3] = new Product('Pippa Metal','facil de limpiar',50,'Pippas',0.20,[90,85,70,100,90,120],55,'2021/04/05');
productsCollection.push(  new Product('Tabaco Nacional','facil de limpiar',80,'Tabaco',0.20,[90,85,70,100,90,120],8,'2021/04/10'));
console.log(productsCollection);

let biggerSales =  productsCollection.filter((product)=> product.sales > 50 );
console.log(biggerSales);

let shorterSales =  productsCollection.filter((product)=> product.sales < 10 );
console.log(shorterSales);

let soonExpiration =  productsCollection.filter((product)=> product.getDateExpiration() < 15 );
console.log(soonExpiration);


/*
console.log('precio Venta: ',product1.priceSaleFunction())
console.log('dias Restantes',product1.getDateExpiration())
console.log('Promedio Seis Meses',product1.averageSixMonths())*/
