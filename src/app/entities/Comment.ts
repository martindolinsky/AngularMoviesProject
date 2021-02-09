export class Comment {

    constructor(
        public id?: number,
        public userId?: number,
        public date?: string,
        public message?: string,
        public movieId?: number,
        public serialId?: number,
        public username?: string
    ) {
    }
}
