import {AdminRoles} from "../../../../store/reducers/Account.reducer";
import {Route} from "../index";
import Dashboard from "./Dashboard";

export default (): Route => {
    return {
        name: "Dashboard",
        icon: "",
        auth: AdminRoles.SuperAdmin,
        children: [
            {
                name: "",
                icon: "",
                path: "/",
                component: Dashboard
            }
        ]
    }
}
