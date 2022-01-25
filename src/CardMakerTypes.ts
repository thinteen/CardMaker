export type HistoryChanges = {
    readonly listState: Canvas[],
    readonly currentIndex: number,
}

export type Templates = {
    readonly name: string,
    readonly json: string,
}

export enum ArtObject {
    carrot = 'https://cdn-icons.flaticon.com/png/128/5948/premium/5948309.png?token=exp=1643038898~hmac=96f4cc3a7385eca81948a6dec0f3acfa',
    papper = 'https://cdn-icons.flaticon.com/png/128/5948/premium/5948322.png?token=exp=1643038898~hmac=17f0d12c5865da8a59b3250275c8617c',
}

export enum UrlImgObject {
    forest = 'https://images.pexels.com/photos/4913844/pexels-photo-4913844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    mountains = 'https://images.pexels.com/photos/9959312/pexels-photo-9959312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

export type ArtObj = {
    readonly width: number,
    readonly height: number,
    readonly type: string,
    readonly src: string,
} & Item

export type ImgObject = {
    readonly width: number,
    readonly height: number,
    readonly src: string | null,
} & Item

export type TextObject = {
    readonly text: string,
    readonly size: number,
    readonly bold: boolean,
    readonly italic: boolean,
    readonly underline: boolean,
    readonly fontFamily: string,
    readonly color: string,
} & Item

export type Block = TextObject | ImgObject | ArtObj;

export type Item = {
    readonly id: number,
    readonly type: string,
    readonly positionX: number,
    readonly positionY: number,
}

export type Background = {
    readonly color: string | null,
    readonly src: string | null,
}

export type Filter = {
    readonly color: string,
    readonly transparency: number,
}

export type Canvas = {
    readonly width: number,
    readonly height: number,
    readonly filter: Filter,
    readonly listItems: Block[];
    readonly background: Background,
}

export type Card = {
    readonly canvas: Canvas,
    readonly history: HistoryChanges,
    readonly templates: Templates[],
    readonly selectItems: number | null,
}
