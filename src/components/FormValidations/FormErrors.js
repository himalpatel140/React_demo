import React from "react";

export const FormErrors = ({formErrors}) => 
    <div className = "text-red">
        {
            Object.keys(formErrors).map((fieldName, fieldIndex) => {
                if(formErrors[fieldName].length > 0) {
                    return(
                        <p>{fieldName} {formErrors[fieldName]}</p>
                    )
                } else {
                    return("");
                }
            })
        }
    </div>