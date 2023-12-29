
function addnhandle(result: number, cb: (num: number) => void) {
    const value = cb(result)
    return value;
}

const a_a = addnhandle(15, (result) => {
    console.log(result);
    return result;
})
console.log("object", a_a);
