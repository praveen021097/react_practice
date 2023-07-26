import React from "react";

const OperationSystems = ({os}) =>{
    return <div>
            <h1>Mobile Operating Systems</h1>

            
                <ul>
                    {os.map((item)=>{
                        return <li>{item}</li>
                })}
                </ul>
            
    </div>
}

export default OperationSystems;