import {AdminRole} from "../../../../store/reducers/Account.reducer";
import {Route} from "../../../../utils/Route";
import Teller from "./Teller";

export default (): Route => {
    return {
        name: "Teller",
        icon: "",
        auth: AdminRole.SuperAdmin,
        children: [
            {
                name: "",
                icon: "",
                path: "/",
                component: Teller
            }
        ]
    }
}
