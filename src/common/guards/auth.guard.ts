import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is required');
    }

    const authParts = authHeader.split(' ');

    if (authParts.length !== 2 || authParts[0] !== 'Basic') {
      throw new UnauthorizedException('Invalid Authorization format');
    }

    const credentials = authParts[1].split(':');
    if (credentials.length !== 2) {
      throw new UnauthorizedException('Invalid credentials format');
    }

    return true; // ✅ Pasa la verificación
  }
}
