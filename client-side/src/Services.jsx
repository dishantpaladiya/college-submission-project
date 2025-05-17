import React, { useEffect, useState } from "react";
import axios from "axios";
import Servicesp from "./props/servicesp";

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get("http://localhost/projects/services_view.php");
            setServicesData(response.data);
        } catch (error) {
            console.error("Error fetching services data:", error);
        }
    };

    return (
        <div className="main-brand" id="services">
            <div className="container">
                <div className="b-inner">
                    <div className="row">
                        {servicesData.map(service => (
                            <Servicesp key={service.id} img={`http://localhost/projects/assets/images/${service.image}`} text={service.details} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;