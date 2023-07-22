

const Sum=(a,b)=>{
    return a+b
}

const Sub=(a,b)=>{
    return a-b
}
const Mult=(a,b)=>{
    return a*b
}
const Div=(a,b)=>{
    return a/b
}
const Mod=(a,b)=>{
    return a%b
}

const Expo=(a,b)=>{
    return a**b;
}

module.exports={
    add:Sum,
    sub:Sub,
    mul:Mult,
    div:Div,
    mode:Mod,
    expo:Expo

}