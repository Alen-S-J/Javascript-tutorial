function fibonacci(Number){
    let n1=0,n2=1
    for(let i=0;i<=Number;i++)
    {
      console.log(n1);
      nx=n1+n2;
      n1=n2;
      n2=nx;
    }

    return fibonacci(Number)

}

let number=fibonacci(45)