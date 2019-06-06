export interface DataInSpec {

    info: any = {};
    cityName: string;
    main: DataInSpec;
    windSpeed: number;
    humidity: number;
    coord: Coord;
    temp: number;
    wind: Wind;
    sys: Sys;
    icon: string;
    weather: Weather[];
    descriptionWeather: string;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface Sys {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}

export interface Wind {
    deg: number;
    gust: number;
    speed: number;
}

export interface Weather {

    description: string;
    icon: string;
    id: number;
    main: string;
}




