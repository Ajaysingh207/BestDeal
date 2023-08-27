import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {updateBrand,getBrand} from "../../../Store/ActionCreators/BrandActionCreators"
export default function AdminUpdateBrand() {
    let [name,setName] = useState("")
    let image = useRef("")
    let {id} = useParams()
    let allStateData = useSelector(state=>state.BrandStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getInputData(e){   
        setName(e.target.value)
    }
    function getInputFile(e) {
        image.current = e.target.files[0].name
    }
    function postData(e){
        e.preventDefault()
        let item = allStateData.slice(1).find(item=>item.name===name)
        if(item && item.id!==Number(id))
        alert("Brand Name Already Exist!!!")
        else
        {
            dispatch(updateBrand({id,id,name:name,pic:image.current}))
            navigate("/admin-brand")
        }
    }
    function getAPIData(){
        dispatch(getBrand())
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
                        <h5 className='bg-primary p-3 text-light text-center rounded'>Brand</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" name='name' onChange={getInputData} placeholder='Enter Brand Name : ' className="form-control" value={name}/>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label>Pic</label>
                                <input type="file" name='pic' onChange={getInputFile} className="form-control" />
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
