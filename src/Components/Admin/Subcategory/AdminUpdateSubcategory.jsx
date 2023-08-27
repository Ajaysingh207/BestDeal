import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {updateSubcategory,getSubcategory} from "../../../Store/ActionCreators/SubcategoryActionCreators"
export default function AdminUpdateSubcategory() {
    let [name,setName] = useState("")
    let {id} = useParams()
    let allStateData = useSelector(state=>state.SubcategoryStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getInputData(e){   
        setName(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        if(allStateData.slice(1).find(item=>item.name===name))
        alert("Subcategory Name Already Exist!!!")
        else
        {
            dispatch(updateSubcategory({id,id,name:name}))
            navigate("/admin-subcategory")
        }
    }
    function getAPIData(){
        dispatch(getSubcategory())
        if(allStateData.length){
            var item = allStateData.find((item)=>item.id===Number(id))
            if(item)
            setName(item.name)
        }
    }
    useEffect(()=>{
        getAPIData()
    },[allStateData.length])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>Admin Section</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <h5 className='bg-primary p-3 text-light text-center rounded'>Subcategory</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" name='name' onChange={getInputData} placeholder='Enter Subcategory Name : ' className="form-control" value={name}/>
                            </div>
                            <div className="mb-3 btn-group w-100">
                                <button type="reset" className='btn btn-secondary text-light w-50'>Reset</button>
                                <button type="submit" className='btn btn-primary text-light w-50'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
