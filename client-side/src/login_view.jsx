import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login_view = () => {

    const [alldata, setAlldata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Fetchdata();
    }, []);

    const Fetchdata = () => {
        axios.get('http://localhost/projects/api/get-api.php').then(function (response) {
            // handle success
            setAlldata(response.data);
        })
    }

    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");
        // alert(id);

        var params = new FormData();
        params.set('id', id);
        // console.log(params);
        axios.post('http://localhost/projects/api/delete-api.php', params).then(function (response) {
            // handle success
            console.log(response);
            if (response.data['status'] === 'yes') {
                alert("Delete Success.");
                Fetchdata();
            }
            else {
                alert("Delete Fail.");
            }
        })
    }
    const handleEdit = (e) => {

        var id = e.target.getAttribute("data-id");

        // Navigate to the edit page for the specific banner

        navigate(`/edit/${id}`);

    }

    return (
        <>

            <table border={2} cellPadding={7} cellSpacing={7}>
                <tr>
                    <th>Index</th>
                    <th>Id</th>
                    <th>email</th>
                    <th>password</th>
                    <th>Action</th>
                    <th>Edit</th>
                </tr>
                { 
                    alldata.map((obj, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{obj.id}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.password}</td>

                                    <td>
                                        <button type="button" onClick={handleDelete} data-id={obj.id}>Delete</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={handleEdit} data-id={obj.id}>Edit</button>
                                    </td>
                                </tr>
                            </>
                        );
                    })
                }
            </table>
        </>
    );
}

export default Login_view;

