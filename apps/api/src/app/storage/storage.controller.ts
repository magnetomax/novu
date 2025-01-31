import { Body, ClassSerializerInterceptor, Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { IJwtPayload } from '@novu/shared';
import { GetSignedUrl } from './usecases/get-signed-url/get-signed-url.usecase';
import { GetSignedUrlCommand } from './usecases/get-signed-url/get-signed-url.command';
import { UserSession } from '../shared/framework/user.decorator';
import { JwtAuthGuard } from '../auth/framework/auth.guard';

@Controller('/storage')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class StorageController {
  constructor(private getSignedUrlUsecase: GetSignedUrl) {}

  @Get('/upload-url')
  async signedUrl(@UserSession() user: IJwtPayload, @Query('extension') extension: string) {
    return await this.getSignedUrlUsecase.execute(
      GetSignedUrlCommand.create({
        applicationId: user.applicationId,
        organizationId: user.organizationId,
        userId: user._id,
        extension,
      })
    );
  }
}
