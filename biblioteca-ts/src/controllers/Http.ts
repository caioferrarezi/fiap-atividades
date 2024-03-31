export class HttpResponse {
  static ok(data: any): Response {
    return {
      statusCode: 200,
      body: data
    };
  }

  static created(data: any): Response {
    return {
      statusCode: 201,
      body: data
    };
  }

  static badRequest(message: string): Response {
    return {
      statusCode: 400,
      body: message
    };
  }

  static notFound(message: string): Response {
    return {
      statusCode: 404,
      body: message
    };
  }
}

export interface Request {
  params: Record<string, string>;
  body: Record<string, any>;
}

export interface Response {
  statusCode: number;
  body: any;
}
