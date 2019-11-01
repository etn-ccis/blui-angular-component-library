import React from 'react';

export function interleave(array, separator) {
    const output = [];
    array.forEach((element, index) => {
        if (index) {
            output.push(separator());
        }
        output.push(element);
    });
    return output;
};
export function separate(array, interpunct) {
    return interleave(array, () => interpunct());
}
export function withKeys(array) {
    return array.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
    ))
}
export const combine = (list) => {
    return list.join(' ');
}