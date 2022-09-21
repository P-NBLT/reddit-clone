# Digital agency searchable database

---

# What this app is about.
---

[Find pout here for a working version](https://paddy-and-p-nblt-reddit-lite.netlify.app/).

Reddit-lite is an imitation of the Reddit platform which allows you to consume content as if you did on Reddit. The data is fetched from the url/json and is read only. We tried to make the experience as close as possible to the reddit one, you will see for example the possibility to login however this project doesn't contain any backend so you won't be able to go any further.

---

# Goal for this project
---

1. Built a complex project where data can be fetched from different places.
2. Make the data easily accessible to the components.
3. Build the design in css. (note: my colleague did his design with tailwind)

--- 

# Table of contents

---

- [App demo](#app-demo)
- [Used technologies and concepts](#used-technologies-and-concepts)
- [Comment](#comment)

---

App demo
---

![reddit](https://user-images.githubusercontent.com/98712114/191453431-68016bd3-e8a6-4233-ab19-a81887621eaf.gif)


# Used technologies and concepts
---
## 👇 Click links to see code sample in this project 👇

- [React for UI building](https://github.com/P-NBLT/reddit-clone/blob/main/src/Component/Categories.js)
- [React router](https://github.com/P-NBLT/reddit-clone/blob/main/src/App.js) 🐣
- [Redux for the data flow](https://github.com/P-NBLT/reddit-clone/blob/main/src/Component/categoriesSlice.js) 🐣

🐣 *New technology learned during this project*

---
# Comment

---

If you did check the code are if you are about to do it, you'll see the main focus here was to make it work, and therefore many things can be improved.
I decided to not make it better since I finished the functionality of the app so you can compare how I grow between this projects and the recents one. So don't expect to see any clean code or reusable component ;).
Besides at the time I worked on this project, I wasn't aware of callback props or useContext which explain the reason of Redux monitoring all the data. If I had to work on this project again I would definitely change the architecture and use the features of react instead of an external library.
