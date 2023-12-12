import { NextResponse } from "next/server";
import Meta from "./meta";

namespace ErrorResponse {
  class errorBuilder extends Meta {
    private statusCode: number = 500;
    constructor(msg: string, ...args: any[]) {
      super(false, msg);
      this.description = args;
    }

    public BadRequest(): errorBuilder {
      this.statusCode = 400;
      return this;
    }

    public Unauthorized(): errorBuilder {
      this.statusCode = 401;
      return this;
    }

    public NotFound(): errorBuilder {
      this.statusCode = 404;
      return this;
    }

    public MethodNotAllowed(): errorBuilder {
      this.statusCode = 405;
      return this;
    }

    public UnprocessableContent(): errorBuilder {
      this.statusCode = 422;
      return this;
    }

    public TooManyRequest(): errorBuilder {
      this.statusCode = 429;
      return this;
    }

    public InternalServerError(): errorBuilder {
      this.statusCode = 500;
      return this;
    }

    public Send() {
      return NextResponse.json(this.toJSON(), {
        status: this.statusCode,
      });
    }
  }

  export function errorBadRequest(msg: string, ...args: any[]): errorBuilder {
    return new errorBuilder(msg, ...args).BadRequest();
  }

  export function errorUnauthorized(): errorBuilder {
    return new errorBuilder(
      "Unauthorized, please login with a valid credential"
    ).Unauthorized();
  }

  export function errorRouteNotFound(): errorBuilder {
    return new errorBuilder("Route Not Found").NotFound();
  }

  export function errorDataNotFound(): errorBuilder {
    return new errorBuilder("Data Not Found").NotFound();
  }

  export function errorMethodNotAllowed(): errorBuilder {
    return new errorBuilder("Method Not Allowed").MethodNotAllowed();
  }

  export function errorUnprocessableContent(
    msg: string,
    ...args: any[]
  ): errorBuilder {
    return new errorBuilder(msg, ...args).UnprocessableContent();
  }

  export function errorTooManyRequest(): errorBuilder {
    return new errorBuilder("Too Many Request").TooManyRequest();
  }

  export function errorResponse(
    e: null | errorBuilder,
    msg: string,
    ...args: any[]
  ): errorBuilder {
    console.log(msg, ...args);
    return e === null || !(e instanceof errorBuilder)
      ? new errorBuilder(msg, ...args).InternalServerError()
      : e;
  }
}

export default ErrorResponse;
