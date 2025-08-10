/**
 * Decorator Pattern Implementation:
 * - Allows dynamic extension of server request handling without modifying the core logic.
 * - ServerRequest: interface for request handling.
 * - BaseServer: core request processor.
 * - ServerRequestDecorator: abstract wrapper for extending behavior.
 * - LoggingMiddleware: logs requests before passing them on.
 * - AuthMiddleware: checks authentication before handling.
 * - Supports stacking multiple middlewares for flexible behavior composition.
 */


// Component Interface - defines request handling contract
export interface ServerRequest {
  handle(request: any): void;
}

// Concrete Component - core request handler
export class BaseServer implements ServerRequest {
  public handle(request: any): void {
    console.log("Handling Request: ", request);
  }
}

// Decorator - wraps a ServerRequest to extend behavior
abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}
  abstract handle(request: any): void;
}

// Concrete Decorator - adds logging behavior
export class LoggingMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    console.log("Logging Request: ", request);
    this.serverRequest.handle(request); // delegate to wrapped component
  }
}

// Concrete Decorator - adds authentication check
export class AuthMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("Request is authenticated");
      this.serverRequest.handle(request);
    } else {
      console.log("UnAuthorised Access");
    }
  }
}
