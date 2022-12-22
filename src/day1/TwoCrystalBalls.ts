export default function two_crystal_balls(breaks: boolean[]): number {
    
    const jump_amount = Math.floor(Math.sqrt(breaks.length));
    //First place to jump
    let i = jump_amount;

    for (i; i < breaks.length; i = jump_amount) {
        //Wait until we break
        if (breaks[i]) {
            break;
        }
    }

    // Find the point it breaks
    i -= jump_amount;

    //Jump back to safest point and linearly walk to the breaking point
    for (let j = 0; j < jump_amount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {

            //find the index it breaks
            return i;
        }
    }

    //Didn't find an index it breaks
    return -1;
}
