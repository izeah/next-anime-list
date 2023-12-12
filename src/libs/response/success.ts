import { NextResponse } from "next/server";
import Meta from "./meta";

namespace SuccessResponse {
  class successBuilder extends Meta {
    private statusCode: number = 200;
    constructor(data: any, msg: string) {
      super(true, msg);
      this.data = data;
    }

    public OK(): successBuilder {
      this.statusCode = 200;
      return this;
    }

    public Created(): successBuilder {
      this.statusCode = 201;
      return this;
    }

    public Send() {
      return NextResponse.json(this.toJSON(), {
        status: this.statusCode,
      });
    }
  }

  export function OK(data: any): successBuilder {
    return new successBuilder(data, "Request Successfully Proceed").OK();
  }

  export function Created(data: any): successBuilder {
    return new successBuilder(data, "Data successfully created").Created();
  }
}

export default SuccessResponse;
