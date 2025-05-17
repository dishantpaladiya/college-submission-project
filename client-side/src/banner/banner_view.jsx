import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// ano use api ne connect krva mate thay chhe

const Banner_view = () => {

    const [alldata, setAlldata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Fetchdata();
    }, []);

    const Fetchdata = () => {
        axios.get('http://localhost/projects/banner_get.php').then(function (response) {
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
        axios.post('http://localhost/projects/banner_delete.php', params).then(function (response) {
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
            <h1>Banner details</h1>
            <table border={2} cellPadding={7} cellSpacing={7} className="tablebr">
                <tr className="tabledata" style={{ border: "3px solid black"}}>
                    <th style={{ border: "3px solid black"}}>Index</th>
                    <th style={{ border: "3px solid black"}}>Id</th>
                    <th style={{ border: "3px solid black"}}>image</th>
                    <th style={{ border: "3px solid black"}}>details</th>
                    <th style={{ border: "3px solid black"}}>paragraph</th>
                    <th style={{ border: "3px solid black"}}>Action</th>
                    <th style={{ border: "3px solid black"}}>Edit</th>
                </tr>
                {
                    alldata.map((obj, index) => {
                        return (
                            <>
                                <tr>
                                    <td style={{ border: "3px solid black",padding:"10px"}}>{index + 1}</td>
                                    <td style={{ border: "3px solid black",padding:"10px"}}>{obj.id}</td>
                                    <td style={{ border: "3px solid black",padding:"10px"}}>{obj.image}</td>
                                    <td style={{ border: "3px solid black",padding:"10px"}}>{obj.details}</td>
                                    <td style={{ border: "3px solid black",padding:"10px"}}>{obj.paragraph}</td>

                                    <td style={{ border: "3px solid black",padding:"10px"}}>
                                        <button type="button" onClick={handleDelete} data-id={obj.id}>Delete</button>
                                    </td>
                                    <td style={{ border: "3px solid black",padding:"10px"}}>
                                        <button type="button" onClick={handleEdit} data-id={obj.id}>Edit</button>
                                    </td>
                                </tr>
                            </>
                        );
                    })
                }
            </table>
            <div className="add" style={{ marginTop:"20px"}}>
                        <Link to="/badd">
                            <button>add data</button>
                        </Link>
            </div>
            <div className="add" style={{ marginTop:"20px"}}>
            <h3>if you data edit and check the result</h3>
                        <Link to="/banner">
                            <button>Go To product page!</button>
                        </Link>
            </div>
        </>
    );
}

export default Banner_view;

