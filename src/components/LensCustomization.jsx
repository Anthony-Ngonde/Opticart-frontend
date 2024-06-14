import React, { useState } from 'react';


function LensCustomization() {
    const [formData, setFormData] = useState({
        sphere: '',
        cylinder: '',
        axis: '',
        pd: '',
        lensMaterial: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className='form-class'>
         <form className="lens-customization-form" onSubmit={handleSubmit}>
            <h2>Lens Customization Form</h2>
            <div className="form-group">
                <label>Sphere (SPH):</label>
                <input type="text" name="sphere" value={formData.sphere} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Cylinder (CYL):</label>
                <input type="text" name="cylinder" value={formData.cylinder} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Axis:</label>
                <input type="text" name="axis" value={formData.axis} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Pupillary Distance (PD):</label>
                <input type="text" name="pd" value={formData.pd} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Lens Material:</label>
                <input type="text" name="lensMaterial" value={formData.lensMaterial} onChange={handleChange} />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
        </div>
       
    );
}

export default LensCustomization;