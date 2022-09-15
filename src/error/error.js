
export class NotFoundException extends Error{
  constructor(message){
    super(message);
    this.name = "Not Found";
    this.code = 404;
  }

}

export class BadRequestException extends Error{
  constructor(message){
    super(message);
    this.name = "Bad Request";
    this.code = 400;
  }
}

export class UnauthorizedException extends Error{
  constructor(message){
    super(message);
    this.name = "Unauthorized";
    this.code = 401;
  }
}