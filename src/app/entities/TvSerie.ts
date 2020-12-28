export class TvSerie {

    constructor(
        public titleEN: string,
        public titleSK: string,
        public year: number,
        public director: string,
        public actors: string,
        public description: string,
        public genre: string,
        public secondTitleEN: string,
        public secondTitleSK: string,
        public src: string,
        public srcImg: string,
        public dataTitle: string,
        public serialID?: number,
    ) {
    }
}
