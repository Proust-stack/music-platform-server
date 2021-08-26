import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import * as path from 'path'

@Module({
    imports: [
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot('mongodb+srv://admin:N8FJMMUgvej7yqKl@cluster0.rzrdp.mongodb.net/music-platform?retryWrites=true&w=majority',
        { useNewUrlParser: true }),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}