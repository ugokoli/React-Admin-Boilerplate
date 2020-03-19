import dashboardRoutes from "./dashboard/routes";
import {Route} from "../../../utils/Route";

export default (): Route[] => {
    return [
        dashboardRoutes()
    ]
}
