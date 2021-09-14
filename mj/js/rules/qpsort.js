function chupaisort(qp,meshTempMj) {
    for (var i=1;i<qp.length;i++)
    {
        if(qp[i]>=meshTempMj) {
            console.log("qp[i]:" + qp[i]);
            return i;
        }
    }
    console.log("qp.length-1:"+(qp.length-1));
    if(meshTempMj<qp[0])
    {
        return 0;
    }
    if(meshTempMj>qp[qp.length-1])
    {
        return (qp.length-1);
    }
}

function twoClickNumberchupaisort(qp,meshTempMj) {
    for (var i=1;i<qp.length;i++)
    {
        if(qp[i]>=meshTempMj) {
            console.log("qp[i]:" + qp[i]);
            return i;
        }
    }
    console.log("qp.length-1:"+(qp.length-1));
    if(meshTempMj<qp[0])
    {
        return 0;
    }
    if(meshTempMj>qp[qp.length-1])
    {
        return (qp.length+1);
    }
}

// function twoClickNumberChupaiSort(qp,temp) {
//     for(var i=1;)
// }