class UserViewDto {
    id;

    email;

    role;

    createdAt;

    constructor({id, email, role, createdAt}) {
        this.id = id;
        this.email = email;
        this.role = role;
        this.createdAt = createdAt;
    }
}

module.exports = UserViewDto;
