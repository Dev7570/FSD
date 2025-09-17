function fun(){
    let row = 4;
let col =(2*row)-1;
for (let i =0 ; i<=row ; i++)
{
    let line = "";
    for(let j =0 ; j<=col ; j++)
    {
        if(i+j>row && j-i<row)
        {
            line += "*";
        }
        else{
            line += " ";
        }
    }
    console.log(line);
}
console.log("before alert");
alert("hello welcom javascript");
console.log("After alert");
}