import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { FileModule } from "./file/file.module";
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
        MongooseModule.forRoot(process.env.MONGO_URL),
        TrackModule,
        FileModule
    ]
})
export class AppModule { }

