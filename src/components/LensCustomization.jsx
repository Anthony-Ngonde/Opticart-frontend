import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';




function LensCustomization() {
    const [formData, setFormData] = useState({
        sphere: '',
        cylinder: '',
        axis: '',
        pd: '',
        lensMaterial: ''
    });
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { itemPurchased, totalPrice } = state || {};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/order-form', { state: { itemPurchased, totalPrice, lensCustomization: formData } });
    };

    return (
        <form className="lens-customization-form" onSubmit={handleSubmit}>
            <h2>Lens Customization Form</h2>
            <div className="form-group">
                <label>Sphere (diopters):</label>
                <input type="text" name="sphere" value={formData.sphere} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Cylinder (diopters):</label>
                <input type="text" name="cylinder" value={formData.cylinder} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Axis (degrees):</label>
                <input type="text" name="axis" value={formData.axis} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Pupillary Distance (mm):</label>
                <input type="text" name="pd" value={formData.pd} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Lens Material (Polycarbonate):</label>
                <input type="text" name="lensMaterial" value={formData.lensMaterial} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default LensCustomization;