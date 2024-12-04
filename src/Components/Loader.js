import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div>
            <div className=' container'>
                <div className=' d-flex justify-content-center'>
                    <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="MagnifyingGlass-loading" wrapperStyle={{}} wrapperClass="MagnifyingGlass-wrapper" glassColor = '#BFD3D5' color = '#27727D'
                    />
                </div>
            </div>
        </div>
    )
}
