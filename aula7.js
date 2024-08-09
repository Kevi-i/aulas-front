function ex24()
{
    var n1 = prompt("digite o num1");
    var n2 = prompt("digite o num2");
    var n3 = prompt("digite o num3");

    if (n1 > n2)
    {
        if (n1 > n3) 
        {
            console.log("o maior número é o: " + n1);
        }
    } else
    {
        if (n2 > n3)
        {
            console.log("o maior número é o: " + n2);
        } else
        {
            console.log("o maior número é o: " + n3);
        }
    }

    if (n1 < n2)
        {
            if (n1 < n3) 
            {
                console.log("o menor número é o: " + n1);
            }
        } else
        {
            if (n2 < n3)
            {
                console.log("o menor número é o: " + n2);
            } else
            {
                console.log("o menor número é o: " + n3);
            }
        }
}