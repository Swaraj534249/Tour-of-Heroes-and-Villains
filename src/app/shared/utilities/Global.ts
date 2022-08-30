import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
// import { AppEvent, AppEventType, EventQueueService, WarningInfo } from "./appEvent/EventQueueService";

export class GlobalConstants {
    public static API_URL: string = (environment.production ? "http://localhost:4200/" : "http://localhost:3000/");
    public static X_AUTH_HEADER: string = "x-authkey";
    public static SESSION_TIMEOUT = 120 * 60 * 1000; // 120m
    public static WARNING_TIMEOUT = 6 * 1000; // 5s
    public static LOCAL_DASHBOARD_COLOR = "local_color";
    public static LOCAL_USER_SESSION = "user_session";
    public static GLOBAL_RETROS_LIMIT = 4;
}

export const navList = {
  Single : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium',
}
