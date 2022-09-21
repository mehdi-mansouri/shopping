const shorten=(title)=>{
    const splitTitle=title.split(" ");
    return(splitTitle[1]!=="-"?
                               `${splitTitle[0]} ${splitTitle[1]}`
                               :`${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]}`)    
}
export {shorten};
