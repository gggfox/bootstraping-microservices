import "reflect-metadata"
import { AppDataSource } from "./data-source"
import { Video } from "./entity/Video"

await AppDataSource.initialize();
const video = new Video()
video.path = "Timber"
await AppDataSource.manager.save(video)
console.log("Saved a new video with id: " + video.id)

const videos = await AppDataSource.manager.find(Video)
console.log("Loaded videos: ", videos)


