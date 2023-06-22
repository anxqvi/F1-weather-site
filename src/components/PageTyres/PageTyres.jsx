import React, { Fragment } from 'react';
import HeaderTyres from '../HeaderTyres';
import C1Tyre from '../C1Tyre';
import C3Tyre from '../C3Tyre';
import C5Tyre from '../C5Tyre';

// Third page that displays recommended tyres based on information gathered manually from the official F1 tyre provider Pirelli
const PageTyres = () => {
    return (
        <Fragment>
            <HeaderTyres />
            <C1Tyre />
            <br></br>
            <C3Tyre />
            <br></br>
            <C5Tyre />
        </Fragment>
    );
};

export default PageTyres;
