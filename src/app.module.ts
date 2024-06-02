import { Module } from '@nestjs/common';
import { PrismaModule } from './persistence/prisma/prisma.module';
import { PrismaService } from './persistence/prisma/prisma.service';
import { ContentController } from './http/rest/controllers/content.controller';
import { MediaPlayerController } from './http/rest/controllers/media-player.controller';
import { ContentManagementService } from './core/services/content-management.service';
import { MediaPlayerService } from './core/services/media-player.service';
import { ContentRepository } from './persistence/repositories/content.repository';
import { VideoRepository } from './persistence/repositories/video.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ContentController, MediaPlayerController],
  providers: [
    PrismaService,
    ContentManagementService,
    MediaPlayerService,
    ContentRepository,
    VideoRepository,
  ],
})
export class AppModule {}
