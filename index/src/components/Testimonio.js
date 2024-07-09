import React from 'react'

function Testimonio(props) {
    return (
        <div className='container mb-5'>
            <div className='row shadow'>
                <div className='col-md-4 p-0'>
                    <img 
                        src={require(`../img/testimonio-${props.imagen}.png`)} 
                        alt={props.nombre}
                        className='img-fluid h-100 w-100 object-fit-cover'
                    />
                </div>
                <div className='col-md-8 p-4'>
                    <p className='text-center mt-5'>
                        
                        <strong>{props.nombre}</strong> en 
                        
                        <strong> {props.pais}</strong>

                    </p>

                    <p className='text-center'>
                        
                        <strong>{props.cargo}</strong> en 
                        
                        <strong> {props.empresa}</strong>
                    
                    </p>

                    <p className='text-justify mt-3' dangerouslySetInnerHTML={{__html: props.testimonio}}></p>
                </div>
            </div>
        </div>
    )
}

export default Testimonio