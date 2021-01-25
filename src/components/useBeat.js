import React from 'react';

function useBeat(url) {
    let audioBeat = new Audio(url);       
    return audioBeat;
}