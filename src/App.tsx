import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/raphaelc484.png",
      name: "Raphael Clemente Miranda",
      role: "CTO @Kaiba Corp",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋," },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publisheAt: new Date("2022-07-04 20:07:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Fuji Clemente Miranda",
      role: "CTO @Yami Corp",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋," },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publisheAt: new Date("2022-07-04 20:07:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                published={post.publisheAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
