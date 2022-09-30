const isMagicSquare=(arr)=>{
    

    
        let DiagonalSum = 0;
        for (let i = 0; i < arr.length; i++)
            DiagonalSum = DiagonalSum+ arr[i][i];

     
        for (let i = 0; i < arr[i].length; i++) {

            let rowSum = 0;
            for (let j = 0; j < arr.length; j++)
                rowSum += arr[i][j];

           
            if (rowSum != DiagonalSum)
                return false;
        }

        
        for (let i = 0; i < arr.length; i++) {

            let colSum = 0;
            for (let j = 0; j < arr[i].length; j++)
                colSum += arr[j][i];

         
            if (DiagonalSum != colSum)
                return false;
        }

        return true;
}


console.log('====================================');
console.log(isMagicSquare([[4,5],[5,4]]));
console.log('====================================');