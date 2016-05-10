/**
 * Created by sholzer on 03.05.2016.
 * Reviewed by skaldo on 06.05.2016.
 */

import Point from './geojson/Point.ts';

export default Route;

export class Route {
    public id: number;
    public gpsData: Point[];

    fromJSON(json: any) {
        for (var propName in this) {
            // TODO: Additional parsing for gpsData needed.
            if (json[propName]) {
                this[propName] = json[propName];
            }
        }
    }
}