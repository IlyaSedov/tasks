const apply = (count, fun, val) => {
    if (count === 0){
        return fun(val);
    }
    
    return apply(count-1, fun, fun(val))
}

