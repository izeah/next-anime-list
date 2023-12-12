import { Prisma, PrismaClient } from "@prisma/client";
import ErrorResponse from "./response/error";

let prismaClient: PrismaClient;

declare global {
  var prisma: undefined | PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient({
    errorFormat: "pretty",
  });
} else {
  if (!global.prisma)
    global.prisma = new PrismaClient({
      errorFormat: "pretty",
    });
  prismaClient = global.prisma;
}

export default prismaClient;

const translateError = (e: any) => {
  switch (true) {
    case e instanceof Prisma.PrismaClientKnownRequestError:
      switch (e.code) {
        case "P2000":
          return ErrorResponse.errorBadRequest("Character too long", {
            field: e?.meta?.target?.[0],
            msg: e.message,
          });
        case "P2001":
        case "P2025":
          return ErrorResponse.errorDataNotFound();
        case "P2002":
          return ErrorResponse.errorUnprocessableContent(
            "This value has been taken",
            e.message
          );
        case "P2003":
          return ErrorResponse.errorUnprocessableContent(e.message, e.message);
        case "P2005":
        case "P2006":
          return ErrorResponse.errorUnprocessableContent(
            "Given value is invalid",
            e.message
          );
        case "P2011":
          return ErrorResponse.errorUnprocessableContent(
            "Given value cannot be null",
            e.message
          );
        default:
          return ErrorResponse.errorResponse(
            e,
            "Something went wrong",
            e.message
          );
      }
    default:
      return ErrorResponse.errorResponse(e, "Something went wrong", e.message);
  }
};

export { translateError };
