import { ServiceType } from "tiny-injector";

declare global {
    namespace Express {

        interface Request {
            locate<T>(serviceType: ServiceType<T>): T
        }
    }
}