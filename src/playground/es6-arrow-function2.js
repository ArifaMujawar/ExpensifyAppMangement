const multiplier = {
    number:[5,6],
    multiplyBy: 2,
    multiply (){
        return this.number.map((i)=> i * this.multiplyBy
        );
    }
}




console.log(multiplier.multiply());
