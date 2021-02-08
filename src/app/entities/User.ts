export class User {

    constructor(
        public username = '',
        public email = '',
        public roles = [],
        public id?: number
    ) {
    }
}
