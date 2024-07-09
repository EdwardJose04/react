import React from 'react'

const Pantalla = ({ input }) => (
    <div className="bg-white rounded p-3 mb-3 shadow-sm">
        <h1 className="display-4 fw-bold text-end text-truncate mb-0" style={{height: '75px'}}>
            {input}
        </h1>
    </div>
);

export default Pantalla;