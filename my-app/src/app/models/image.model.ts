type Nullable<T> = T | null;
export interface Image {
    Art: Nullable<number>;
    Neither: Nullable<number>;
    Vandalism: Nullable<number>;
    Vote1ID: Nullable<string>;
    Vote1IP: Nullable<string>;
    Vote2ID: Nullable<string>;
    Vote2IP: Nullable<string>;
    Vote3ID: Nullable<string>;
    Vote3IP: Nullable<string>;
    imageName: Nullable<string>;
    imageUrl: Nullable<string>;
    latitude: Nullable<string>;
    longitude: Nullable<string>;
    /*date: Date;
    imageName: string;
    url: string;
    long: number;
    lat: number;*/
}