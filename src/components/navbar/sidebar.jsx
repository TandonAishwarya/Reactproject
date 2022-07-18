import React, { Fragment } from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
    <React.Fragment>
        <div>
            <ul class="list-group">
                <li class="list-group-item pt-4 pb-4"><NavLink className="" to={"/SpecialCampaign"}>Special Campaign</NavLink></li>
                <li class="list-group-item pt-4 pb-4"><NavLink className="" to={"/InternationalConvention"}>International Convention</NavLink></li>
                <li class="list-group-item pt-4 pb-4"><NavLink className="" to={"/PSUsInstitutions"}>PSUs Institutions</NavLink></li>
                <li class="list-group-item pt-4 pb-4"><NavLink className="" to={"/ChiefControllerofAccount"}>Chief Controller of Account</NavLink></li>
                <li class="list-group-item pt-4 pb-4"><NavLink className="" to={"/InternationalYogaDay"}>International Yoga Day</NavLink></li>
            </ul>
        </div>
    </React.Fragment>
    )
}
export default Sidebar;