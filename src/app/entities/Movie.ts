export class Movie {

    constructor(
        public titleEN: string = '',
        public titleSK: string = '',
        public genre: string = '',
        public year: number = 0,
        public director: string = '',
        public actors: string = '',
        public description: string = '',
        public secondTitleEN: string = '',
        public secondTitleSK: string = '',
        public src: string = '',
        public srcImg: string = '',
        public length: number = 0,
        public imdbSrc: string = '',
        public dataTitle: string = '',
        public movieID?: number,
    ) {
    }
}
