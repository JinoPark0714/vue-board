
export class NotFoundException extends Error{
  constructor(message){
    super(message);
    this.name = "Not Found";
  }

}

export class BadRequestException extends Error{
  constructor(message){
    super(message);
    this.name = "Bad Request";
  }
}