class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("JavaScript Basics", "Alice", 300);
video1.watch();

const video2 = new Video("React Tutorial", "Bob", 450);
video2.watch();

const videoData = [
  { title: "Node.js Crash Course", uploader: "Charlie", time: 600 },
  { title: "CSS Animations", uploader: "Dana", time: 200 },
  { title: "Python for Beginners", uploader: "Eli", time: 480 },
  { title: "Vue.js Deep Dive", uploader: "Fay", time: 550 },
  { title: "Understanding TypeScript", uploader: "Grace", time: 400 }
];

const videoInstances = videoData.map(video => new Video(video.title, video.uploader, video.time));

videoInstances.forEach(video => video.watch());
