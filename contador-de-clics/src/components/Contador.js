import React from 'react'

function Contador({ numClics }) {
    return (
        <div className='d-inline-block'>
            <div className='bg-white p-3 rounded-circle border border-3 border-light shadow'>
                <h1 className='text-dark fs-1 fw-bold m-0' style={{ minWidth: '150px'}}>
                    {numClics}
                </h1>
            </div>
        </div>
    )
}

export default Contador