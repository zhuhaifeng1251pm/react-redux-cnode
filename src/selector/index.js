export const showTab=tab=>{
    switch(tab){
        case 'ask': return tab="问答";
        case 'jbo': return tab="招聘";
        case 'share': return tab="分享";
        default:return tab;
    }
}
export const newArrs=(visiters)=>{
    for(let i=0;i<visiters.length;i++){
        visiters[i]=Object.assign({num:i+1},visiters[i])
    }
    return visiters
}








