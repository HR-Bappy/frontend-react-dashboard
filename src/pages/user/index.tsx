import { Link } from "react-router-dom"
import './user.scss'
import { FaSearch } from "react-icons/fa"
import { users } from "../../data/user"
import { MdEdit, MdOutlineDelete } from "react-icons/md"
import { useEffect, useState } from "react"
import { LocalStorageService } from "../../services/localStorage.service"


const User = () => {
    const [userData,] =useState<any>(users);
    
    return (
        <div className="user-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="page-header d-flex justify-content-between align-items-center">
                        <h2>
                            User List
                        </h2>
                        <Link className="" to={'/user/add'}>Add</Link>
                    </div>
                </div>
                <div className="row filter-section">
                    <div className="col-md-4 col-sm-6 search-container">
                        <input type="text" name="searchbox" id="searchbox" placeholder="Type something" />
                        <div className="styled-link">
                            <FaSearch className="search-icon" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 filter">
                        <p>filter</p>
                    </div>
                </div>
                <div className="row pt-5">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Role</th>
                                <th scope="col">Location</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData?.map((row: any, index: number) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{row?.name}</td>
                                            <td>{row?.role}</td>
                                            <td>{row?.location}</td>
                                            <td>{row?.from}</td>
                                            <td>{row?.to}</td>
                                            <td><Link  to={'/user/'+row.id} title="edit" className="btn p-0"><MdEdit /></Link> <button title="delete" className="btn p-0"><MdOutlineDelete/></button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User