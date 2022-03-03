import React, { useContext } from 'react'
import { Drawer } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { AuthContext } from '../Contexts/AuthProvider'

export const CartDrawer = () => {

    const { state, setState, cart } = useContext(AuthContext)

    return (
        <div>
            <Drawer anchor='right' open={state}
                onClose={() => setState(false)} onOpen={() => setState(true)}>
                <div className='drawer'>
                    <Close style={{ fontSize: 33 }} onClick={() => setState(false)} />
                </div>
                <div>
                    {cart.map((item) => {
                        return (
                            <p>{item.name}</p>
                        )
                    })}
                </div>
            </Drawer>
        </div>
    )
}
