const shorten=(title)=>{
    const splitTitle=title.split(" ");
    return(splitTitle[1]!=="-"?
                               `${splitTitle[0]} ${splitTitle[1]}`
                               :`${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]}`)    
}

const isInCart=(state ,id)=>{
    const result=!!state.selectedItem.find(item=>item.id === id);
    return result;
}
const quantityCount=(state,id)=>{
    const index=state.selectedItem.findIndex(item => item.id ===id);
    if (index === -1) {
        return false;
    } else {
        return state.selectedItem[index].quantity;
    }
}
export {shorten , isInCart ,quantityCount};
