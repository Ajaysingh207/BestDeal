import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active">
                    Menu
                </Link>
                <Link to="/admin" className="list-group-item list-group-item-action">Home</Link>
                <Link to="/admin-maincategory" className="list-group-item list-group-item-action">Maincategory</Link>
                <Link to="/admin-subcategory" className="list-group-item list-group-item-action">Subcategory</Link>
                <Link to="/admin-brand" className="list-group-item list-group-item-action">Brand</Link>
                <Link to="/admin-product" className="list-group-item list-group-item-action">Product</Link>
                
            </div>
        </>
    )
}
