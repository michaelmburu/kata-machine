export default function bs_list(haystack: number[], needle: number): boolean {
    let lowest_index = 0;
    let highest_index = haystack.length;

    do {
        const middle_index = Math.floor(
            lowest_index + (highest_index - lowest_index) / 2,
        );
        const v = haystack[middle_index];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            highest_index = middle_index;
        } else {
            lowest_index = middle_index + 1;
        }
    } while (lowest_index < highest_index);

    return false;
}
