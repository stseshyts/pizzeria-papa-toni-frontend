import React from 'react';
import PizzaMenuList from '../menu-list';
import OrderCartTable from "../order-cart-table.js";

const HomePage = () => {
    return (
        <div>
            <PizzaMenuList/>
            <OrderCartTable />
        </div>
    )
}

export default HomePage; 